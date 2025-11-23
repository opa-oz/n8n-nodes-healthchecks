RUN := @docker run --rm -v "./dist:/app/dist" -it healthchecks

build-container:
	@docker build -t healthchecks .

build: build-container
	$(RUN) npm run build


prepublishOnly: build-container
	$(RUN) npm run prepublish-only
