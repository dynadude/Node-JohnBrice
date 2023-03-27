import Joi from 'joi';

export const coinValidator = Joi.object({
    name: Joi.string()
        .pattern(new RegExp('^[A-Z]{3}$'))
        .required()
	.uppercase()
})
