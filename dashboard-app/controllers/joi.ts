import { Request, Response, Errback } from 'express';
import createHttpError from 'http-errors';
import Joi from 'joi';

export default (validator: Joi.ObjectSchema) => async (req: Request, res: Response, next: Function) => {
  try {
    const validated = await validator.validateAsync(req.body);
    req.body = validated;
    return next();
  } catch (err: any) {
    //* Pass err to next
    //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
    if (err.isJoi) { return next(createHttpError(422, { message: err.message })); }
    return next(createHttpError(500));
  }
};
