import express from 'express';
import { Router } from "express";
import passport from 'passport';
import { gitHubCallback } from '../middlewares/auth';

const router = Router();

router.use(express.json());

router.get('/github', passport.authenticate("github", { scope: ["user:email"] }));

router.get('/github/callback', gitHubCallback);

router.get('/failed', (req, res) => {
	res.send('login failed')
});

export default router;
