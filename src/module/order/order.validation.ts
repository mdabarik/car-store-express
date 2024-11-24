import Joi from 'joi'

export const orderValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': '"email" should be a string',
    'string.email': '"email" must be a valid email address',
    'any.required': '"email" is required',
  }),

  car: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.base': '"car" should be a string',
      'string.pattern.base': '"car" must be a valid ObjectId',
      'any.required': '"car" is required',
    }),

  quantity: Joi.number().integer().min(1).required().messages({
    'number.base': '"quantity" should be a number',
    'number.integer': '"quantity" must be an integer',
    'number.min': '"quantity" must be at least 1',
    'any.required': '"quantity" is required',
  }),

  totalPrice: Joi.number().positive().required().messages({
    'number.base': '"totalPrice" should be a number',
    'number.positive': '"totalPrice" must be a positive number',
    'any.required': '"totalPrice" is required',
  }),
})
