import Joi from 'joi'

export const orderValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': '"email" must be type string',
    'string.email': '"email" must be correct email address',
    'any.required': '"email" is required',
  }),

  car: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.base': '"car" must be a string',
      'string.pattern.base': '"car" should be a valid ObjectId',
      'any.required': '"car" is required',
    }),

  quantity: Joi.number().integer().min(1).required().messages({
    'number.base': '"quantity" should be a number',
    'number.integer': '"quantity" should be an integer',
    'number.min': '"quantity" must be at least 1',
    'any.required': '"quantity" is required',
  }),

  totalPrice: Joi.number().positive().required().messages({
    'number.base': '"totalPrice" should be a number',
    'number.positive': '"totalPrice" cant be negative',
    'any.required': '"totalPrice" is required',
  }),
})
