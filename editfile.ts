import fs from 'fs';

fs.readFile('test.txt', null, (err, data) => {
	if (err) {
		console.log(`Error: ${err}`);
		return;
	}

	console.log(data.toString());
})
