import { model, Schema } from 'mongoose'
import { ICar } from './car.interface'

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1886,
      max: new Date().getFullYear(),
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    // auto add createdAt and updatedAt
    timestamps: true,
  }
)

const Car = model<ICar>('Car', carSchema)
export default Car
