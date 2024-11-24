import Car from '../car/car.model'
import { IOrder } from './order.interface'
import Order from './order.model'

export const createOrder = async (payload: IOrder) => {
  const { car: carId, quantity } = payload

  // retrive the car details
  const car = await Car.findById(carId)

  if (!car) {
    throw {
      message: 'Car not found',
      status: false,
      code: 404,
    }
  }

  // Check if there is sufficient stock
  if (car.quantity < quantity) {
    throw {
      message: 'Insufficient stock for the requested quantity',
      status: false,
      code: 400,
    }
  }

  // Calculate total price dynamically based on car price
  const totalPrice = car.price * quantity

  // Create the order
  const order = await Order.create({
    ...payload,
    totalPrice,
  })

  // Update the car inventory
  car.quantity -= quantity
  if (car.quantity === 0) {
    car.inStock = false
  }
  await car.save()

  // Return success response
  return {
    message: 'Order created successfully',
    status: true,
    data: order,
  }
}

const getOrder = async () => {
  const result = await Order.find()
  return result
}

const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id)
  return result
}

const updateOrder = async (id: string, data: IOrder) => {
  const result = await Order.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id)
  return result
}

export const orderService = {
  createOrder,
  getOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
}
