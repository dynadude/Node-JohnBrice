import { Request, Response } from 'express';

type ErrorType = {
	status?: number,
	message: string
}

export function handleError(err: ErrorType, req: Request, res: Response, next: Function) {
	res.status(err.status || 400);
	res.send(err.message);
}
