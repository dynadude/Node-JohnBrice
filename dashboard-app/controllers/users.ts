import { Request, Response } from 'express';
export const addSymbol = (symbol: string) => async (req: Request, res: Response, next: Function) => {
	req.dbPool.execute(`
		INSERT INTO users_symbols(user_id, symbol)
		values(?, ?)
	`, [1, "PND"], (err: Error, data: string) => {
		if (err) {
			next(err);
			return;
		}

		console.log(data);
		next();	
	})
}
