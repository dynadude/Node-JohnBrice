function howManyCandles(dayNumber, callback) {
	if (dayNumber < 1) {
		return callback("The day must be higher or equal to 1");
	}

	if (dayNumber > 8) {
		return callback("There is no Isru chag for hanuka");
	}

	callback(null, (dayNumber + 1));
}

function calcTotalCandles(maxDayNumber=8, candleFunction=howManyCandles, callback) {
	let sum = 0;
	for (let i = 1; i <= maxDayNumber; i ++) {
		candleFunction(i, (err, candleCount) => {
			sum += candleCount;

			if (i == maxDayNumber) {
				callback(null, sum);
			}
		})
	}
}

calcTotalCandles(8, howManyCandles, (err, sum) => {
	console.log(sum);
});
