install:
	npm install

brain-even:
	node brain-games/bin/brain-even.js

brain-calc:
	node brain-games/bin/brain-calc.js

brain-gcd:
	node brain-games/bin/brain-gcd.js

brain-progression:
	node brain-games/bin/brain-progression.js

brain-prime:
	node brain-games/bin/brain-prime.js	

publish:
	npm publish --dry-run

lint:
	npx eslint .