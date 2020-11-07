build:
	npx webpack
	node server/build.js


dev:
	npx webpack --watch