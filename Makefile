install:
	npm install

brain-even:
	node brain-games/bin/brain-even.js

brain-calc:
	node brain-games/bin/brain-calc.js

brain-gcd:
	node brain-games/bin/brain-gcd

publish:
	npm publish --dry-run

lint:
	npx eslint .