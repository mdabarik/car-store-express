import Joi from 'joi'

export const carValidationSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional()
    .messages({
      'string.base': '"id" should be string',
      'string.pattern.base': '"id" must be valid MongoDB ObjectId',
    }),

  brand: Joi.string().min(1).max(50).required().messages({
    'string.base': '"brand" should be string',
    'string.empty': '"brand" cannot be empty',
    'string.min': '"brand" must contains at least 1 character',
    'string.max': '"brand" can have at most 50 characters',
    'any.required': '"brand" is required',
  }),

  model: Joi.string().min(1).max(50).required().messages({
    'string.base': '"model" must be string',
    'string.empty': '"model" cannot be empty',
    'string.min': '"model" must have at least 1 character',
    'string.max': '"model" can have at most 50 characters',
    'any.required': '"model" is required',
  }),

  year: Joi.number()
    .integer()
    .min(1886)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'number.base': '"year" should be number',
      'number.min': '"year" cannot be earliar than 1886',
      'number.max': '"year" cannot be in the future',
      'any.required': '"year" is required',
    }),

  price: Joi.number().positive().required().messages({
    'number.base': '"price" should be number',
    'number.positive': '"price" must be positive number',
    'any.required': '"price" is required',
  }),

  category: Joi.string()
    .valid('Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible')
    .required()
    .messages({
      'string.base': '"category" should be string',
      'any.only':
        '"category" must be one of the following [Sedan, SUV, Truck, Coupe, Convertible]',
      'any.required': '"category" is required',
    }),

  description: Joi.string().max(500).required().messages({
    'string.base': '"description" should be a string',
    'string.max': '"description" cannot be more than 500 characters',
    'any.required': '"description" is required',
  }),

  quantity: Joi.number().integer().min(0).required().messages({
    'number.base': '"quantity" should be a number',
    'number.integer': '"quantity" must be integer',
    'number.min': '"quantity" must be positive',
    'any.required': '"quantity" is required',
  }),

  inStock: Joi.boolean().required().messages({
    'boolean.base': '"inStock" should be a true/false',
    'any.required': '"inStock" is required',
  }),
})

// car update validation schema
export const carUpdateValidationSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional()
    .messages({
      'string.base': '"id" should be a string',
      'string.pattern.base': '"id" must be valid MongoDB ObjectId',
    }),

  brand: Joi.string().min(1).max(50).optional().messages({
    'string.base': '"brand" should be a string',
    'string.empty': '"brand" cannot be empty',
    'string.min': '"brand" must contains at least 1 character',
    'string.max': '"brand" can have at most 50 characters',
  }),

  model: Joi.string().min(1).max(50).optional().messages({
    'string.base': '"model" should be a string',
    'string.empty': '"model" cannot be empty',
    'string.min': '"model" must contains at least 1 character',
    'string.max': '"model" can have at most 50 characters',
  }),

  year: Joi.number()
    .integer()
    .min(1886)
    .max(new Date().getFullYear())
    .optional()
    .messages({
      'number.base': '"year" should be a number',
      'number.min': '"year" cannot be earlier than 1886',
      'number.max': '"year" cannot be in the future',
    }),

  price: Joi.number().positive().optional().messages({
    'number.base': '"price" should be a number',
    'number.positive': '"price" must be a positive number',
  }),

  category: Joi.string()
    .valid('Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible')
    .optional()
    .messages({
      'string.base': '"category" should be a string',
      'any.only':
        '"category" must be one of the floowing [Sedan, SUV, Truck, Coupe, Convertible]',
    }),

  description: Joi.string().max(500).optional().messages({
    'string.base': '"description" should be a string',
    'string.max': '"description" cannot be more than 500 characters',
  }),

  quantity: Joi.number().integer().min(0).optional().messages({
    'number.base': '"quantity" should be a number',
    'number.integer': '"quantity" must be integer',
    'number.min': '"quantity" must be positive',
  }),

  inStock: Joi.boolean().optional().messages({
    'boolean.base': '"inStock" should be a boolean',
  }),
})
  .min(1)
  .messages({
    'object.min': 'at least one field required for update',
  })
