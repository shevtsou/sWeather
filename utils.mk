dockerhub-rebuild-and-push-images:
	docker build ./services/backend -t shevtsovnikita/sweather-cors --no-cache
	docker push shevtsovnikita/sweather-cors:latest
	docker build ./services/frontend -t shevtsovnikita/sweather --no-cache
	docker push shevtsovnikita/sweather:latest
	docker build ./services/nginx -t shevtsovnikita/sweather-reverse --no-cache
	docker push shevtsovnikita/sweather-reverse:latest