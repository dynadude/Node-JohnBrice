const sagi = async (dayNumber: number): Promise<number> => {
	if (dayNumber < 1) {
		throw "The day must be higher or equal to 1";
	}

	if (dayNumber > 8) {
		throw "There is no Isru chag for hanuka";
	}

	return dayNumber + 1
}

const totalCandles = async (maxDayNumber=8, candleFunction=sagi) => {
	let sum = 0;
	let candleJobs: Array<Promise<number>> = [];
	for (let i = 1; i <= maxDayNumber; i ++) {
		candleJobs.push(candleFunction(i));
	}

	for (let i = 0; i < maxDayNumber; i ++) {
		sum += await candleJobs[i];
	}
	
	return sum;
}

(async () => {console.log(await totalCandles())})();
