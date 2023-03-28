import { Request, Response } from 'express';

export function logPostRequests(req: Request, res: Response, next: Function) {
	if (req.method !== "POST") {
		next();
		return;
	}

	res.on('finish', () => {
		console.log(`Endpoint: ${req.url} Status: ${res.statusCode}`);
	})

	next();
}


