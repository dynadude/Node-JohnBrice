import { getFirstValueFromSiteByClasses } from '../middlewares/scraping';

export const getCoinValue = async (coin: string) => {
	return await getFirstValueFromSiteByClasses(`https://www.google.com/finance/quote/${coin}-USD`, ['YMlKec', 'fxKbKc']);
}
export const getCoinValues = async (coinNames: Array<string>, errorValue = null) => {
	let coins: Array<Object> = [];
	for (let i = 0; i < coinNames.length; i++) {
		try {
			coins.push({name: coinNames[i], value: await getCoinValue(coinNames[i])});
		}
		catch (err) {
			console.log(err);
			coins.push({name: coinNames[i], value: null});
		}
	}

	return coins;
}
