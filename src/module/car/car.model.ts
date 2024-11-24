import { model, Schema } from 'mongoose'
import { ICar } from './car.interface'

const carSchema = new Schema<ICar>({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ['Sedan', 'SUV', 'Truct', 'Coupe', 'convertible'],
      message: '{VALUE} is not a valid role',
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

const Car = model<ICar>('User', carSchema)
export default Car
