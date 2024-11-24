import Joi from 'joi'

export const carValidationSchema = Joi.object({
  brand: Joi.string().min(1).max(50).required().messages({
    'string.base': '"brand" should be a string',
    'string.empty': '"brand" cannot be empty',
    'string.min': '"brand" should have at least 1 character',
    'string.max': '"brand" should have at most 50 characters',
    'any.required': '"brand" is required',
  }),

  model: Joi.string().min(1).max(50).required().messages({
    'string.base': '"model" should be a string',
    'string.empty': '"model" cannot be empty',
    'string.min': '"model" should have at least 1 character',
    'string.max': '"model" should have at most 50 characters',
    'any.required': '"model" is required',
  }),

  year: Joi.number()
    .integer()
    .min(1886)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'number.base': '"year" should be a number',
      'number.min': '"year" cannot be before 1886',
      'number.max': '"year" cannot be in the future',
      'any.required': '"year" is required',
    }),

  price: Joi.number().positive().required().messages({
    'number.base': '"price" should be a number',
    'number.positive': '"price" must be a positive number',
    'any.required': '"price" is required',
  }),

  category: Joi.string()
    .valid('Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible')
    .required()
    .messages({
      'string.base': '"category" should be a string',
      'any.only':
        '"category" must be one of [Sedan, SUV, Truck, Coupe, Convertible]',
      'any.required': '"category" is required',
    }),

  description: Joi.string().max(500).required().messages({
    'string.base': '"description" should be a string',
    'string.max': '"description" cannot exceed 500 characters',
    'any.required': '"description" is required',
  }),

  quantity: Joi.number().integer().min(0).required().messages({
    'number.base': '"quantity" should be a number',
    'number.integer': '"quantity" must be an integer',
    'number.min': '"quantity" cannot be negative',
    'any.required': '"quantity" is required',
  }),

  inStock: Joi.boolean().required().messages({
    'boolean.base': '"inStock" should be a boolean',
    'any.required': '"inStock" is required',
  }),
})
