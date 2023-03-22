import fs from 'fs';
import { promisify } from 'util';

const readPromisify = promisify(fs.readFile);

async function main() {
	try {
		console.log((await readPromisify('test.txt', null)).toString());
	} catch (err) {
		console.error(err);
	}
}

main();
