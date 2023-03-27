import axios from 'axios';
import { load } from 'cheerio';
import { Request, Response } from 'express';

async function loadSite(url: string) {
		let response = (await axios.get(url)).data;

		return(load(response));

}

export const getFirstValueFromSiteByIds = async (url: string, ids: Array<string>, elementType: string = "div") => {
	let $ = await loadSite(url);

	if (!$) {
		return null;
	}

	let idsString = ids.join('#');

	// get the value from a div that has very weird class names
	return $(`${elementType}#${idsString}`).text();
}

export const getFirstValueFromSiteByClasses = async (url: string, classNames: Array<string>, elementType: string = "div") => {
	let $ = await loadSite(url);

	if (!$) {
		return null;
	}

	let classesString = classNames.join('.');

	// get the value from a div that has very weird class names
	let value = $(`${elementType}.${classesString}`).text();
	if (!value) {
		throw {status: 522, message: "Value Not Found!"};
	}

	return value;
}
