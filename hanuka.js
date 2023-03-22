async function howManyCandles(dayNumber) {
	if (dayNumber < 1) {
		throw "The day must be higher or equal to 1";
	}

	if (dayNumber > 8) {
		throw "There is no Isru chag for hanuka";
	}

	return dayNumber + 1
}

async function calcTotalCandles(maxDayNumber=8, candleFunction=howManyCandles) {
	let sum = 0;
	let candleJobs = []
	for (let i = 1; i <= maxDayNumber; i ++) {
		candleJobs.push(candleFunction(i));
	}

	for (let i = 0; i < maxDayNumber; i ++) {
		sum += await candleJobs[i];
	}
	
	return sum;
}

calcTotalCandles().then((sum) => {
	console.log(sum);
});
