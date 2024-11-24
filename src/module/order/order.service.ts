import Car from '../car/car.model'
import { IOrder } from './order.interface'
import Order from './order.model'

export const createOrder = async (payload: IOrder) => {
  const { car: carId, quantity } = payload

  // retrive the car information
  const car = await Car.findById(carId)

  if (!car) {
    throw {
      message: 'Car not found',
      status: false,
      code: 404,
    }
  }

  // check enough stock exists or not
  if (car.quantity < quantity) {
    throw {
      message: 'Insufficient stock for the requested quantity',
      status: false,
      code: 400,
    }
  }

  // total price
  const totalPrice = car.price * quantity

  // creating the order
  const order = await Order.create({
    ...payload,
    totalPrice,
  })

  // updating car data
  car.quantity -= quantity
  if (car.quantity === 0) {
    car.inStock = false
  }
  await car.save()

  // response at the end -- success
  return {
    message: 'Order created successfully',
    status: true,
    data: order,
  }
}

const computeTotalRevenue = async () => {
  try {
    // total revenue calculation using aggregation
    const result = await Order.aggregate([
      {
        $lookup: {
          from: 'cars', // collection name
          localField: 'car', // foreign key
          foreignField: '_id', // primary key
          as: 'carDetails', // result array name carDetails
        },
      },
      {
        $unwind: '$carDetails', // flatten carDetails array
      },
      {
        $project: {
          totalRevenue: {
            $multiply: ['$carDetails.price', '$quantity'], // total revenue for each order
          },
        },
      },
      {
        $group: {
          _id: null, // group everything into one document
          totalRevenue: { $sum: '$totalRevenue' }, // sum of total revenue
        },
      },
    ])

    // if result is empty, return 0
    if (!result.length) {
      return 0
    }

    return result[0].totalRevenue // total revenue
  } catch (error) {
    console.error('Error calculating total revenue:', error)
    throw new Error('Error calculating total revenue')
  }
}

/*
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
} */

export const orderService = {
  createOrder,
  computeTotalRevenue,
}
