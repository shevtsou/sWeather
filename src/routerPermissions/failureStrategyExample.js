export default async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(false)
    }, 1000)
  })
}
