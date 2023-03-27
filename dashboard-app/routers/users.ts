import express, { Request, Response, Errback } from 'express';
import { Router } from "express";
import { getCoinValues } from "../controllers/coins";
import Joi from "../middlewares/joi";
import { coinValidator } from "./users.validate";
import { connectToMongoDb, connectToMySqlDb } from '../middlewares/db';
import { addSymbol } from '../controllers/users';
import { getFirstValueFromSiteByClasses } from '../middlewares/scraping';

const router = Router();

router.use(express.json());

router.get('/welcome', (req, res) => {
	res.render('users/welcome');
});

router.get('/dashboard', async (req, res) => {
	res.render('users/dashboard', {
		coins: await getCoinValues(['NIS', 'USD', 'YEN'])
	});
});

router.post('/symbol', Joi(coinValidator), connectToMySqlDb(), (req, res, next) => {addSymbol(req.body.name); next()}, (req, res) => {
	res.send("Nice!");
})

router.get('/query', connectToMySqlDb(), (req, res) => {

	res.send("Connected to DB");
})

router.get('/getValue/:coin', async (req, res, next) => {

	try {
		let value = await getFirstValueFromSiteByClasses(`https://www.google.com/finance/quote/${req.params.coin}-USD`, ['YMlKec', 'fxKbKc']);
		res.send(value);
	}
	catch (err) {
		next(err);
	}
})

export default router;
