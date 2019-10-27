variable "do_token" {}

# Configure the DigitalOcean Provider
provider "digitalocean" {
  token = "${var.do_token}"
}

resource "digitalocean_ssh_key" "default" {
  name       = "Terraform Example"
  public_key = "${file(pathexpand("~/.ssh/id_rsa.pub"))}"
}

# Create a web server
resource "digitalocean_droplet" "web" {
  name = "sweather"
  image  = "ubuntu-18-04-x64"
  region = "fra1"
  size = "s-1vcpu-1gb"
  ssh_keys = ["${digitalocean_ssh_key.default.fingerprint}"]
}

data "template_file" "ansible_inventory" {
  template = "${file("${path.cwd}/ansible/production/inventory.tpl")}"
  vars = {
    app_ip = "${digitalocean_droplet.web.ipv4_address}"
  }
}

resource "local_file" "ansible-production-inventory" {
    content     = "${data.template_file.ansible_inventory.rendered}"
    filename = "${path.cwd}/ansible/production/inventory"
}

resource "digitalocean_project" "sweather-project" {
  name        = "sweather-wps"
  description = "Project for the sweather"
  purpose     = "Class project / Educational purposes"
  environment = "Staging"
  resources   = ["${digitalocean_droplet.web.urn}"]
}