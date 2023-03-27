export const getCoinValues = async (coinNames: Array<string>) => {
	let coins: Array<Object> = [];
	for (let i = 0; i < coinNames.length; i++) {
		coins.push({name: coinNames[i], value: 9435});
	}

	return coins;
}
