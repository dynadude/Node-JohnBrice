import { Request, Response } from 'express';

export function authenticate(req: Request, res: Response, next: Function) {
	if (req.headers.authorization !== "Bearer 123") {
		res.status(401);
		res.send("Ya Maniak!!!");
		return;
	}

	next();
}

export function handleLogonError(err: string, req: Request, res: Response, next: Function) {
	if (err !== "No Token Specified") {
		next(err);
		return;
	}

	res.status(400);
	res.send("No Token Specified");
}

