import { model, Schema } from 'mongoose'
import { IOrder } from './order.interface'

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple regex for email validation
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car', // Referencing the `Car` model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Ensure at least 1 car is ordered
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0, // Total price cannot be negative
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
)

const Order = model<IOrder>('Order', orderSchema)
export default Order
