help:
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up:
	$(FAB) deploy:host=ubuntu@5.253.26.144 -f ./deploy/fabfile.py

FAB=fab
