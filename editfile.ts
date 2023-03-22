import { readFileSync } from 'fs';

async function main() {
	try {
		console.log(readFileSync('test.txt').toString())
	} catch (err) {
		console.error(err);
	}
}

main();
