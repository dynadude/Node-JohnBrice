import express, { Request, Response, Errback } from 'express';
import { Router } from "express";
import { getCoinValues } from "../controllers/coins";
import Joi from "../controllers/joi";
import { coinValidator } from "./users.validate";
import { connectToDb } from '../controllers/db';
import { addSymbol } from '../controllers/users';

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

router.post('/symbol', Joi(coinValidator), connectToDb(), (req, res, next) => {addSymbol(req.body.name); next()}, (req, res) => {
	res.send("Nice!");
})

router.get('/query', connectToDb(), (req, res) => {

	res.send("Queried DB");
})

export default router;
