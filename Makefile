REPORTER = nyan

test:
	./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--ui bdd

test-w:
	./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--growl \
		--ui bdd \
		--watch

.PHONY: test test-w