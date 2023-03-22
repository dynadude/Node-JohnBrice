const howManyCandles = async (dayNumber: number): Promise<number> => {
	if (dayNumber < 1) {
		throw "The day must be higher or equal to 1";
	}

	if (dayNumber > 8) {
		throw "There is no Isru chag for hanuka";
	}

	return dayNumber + 1
}

const totalCandles = async (maxDayNumber = 8, candleFunction = howManyCandles) => {
	let sum = 0;
	let candlePromises: Array<Promise<number>> = [];

	// create the Promises
	for (let i = 1; i <= maxDayNumber; i++) {
		candlePromises.push(candleFunction(i));
	}

	// get the outputs of the Promises
	for (let i = 0; i < maxDayNumber; i++) {
		sum += await candlePromises[i];
	}

	return sum;
}

function main() {
	(async () => { console.log(await totalCandles()) })();
}

main();
