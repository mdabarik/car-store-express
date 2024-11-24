import { ICar } from './car.interface'
import Car from './car.model'

const createCar = async (payload: ICar) => {
  const result = await Car.create(payload)
  return result
}

const getCar = async (searchTerm: string) => {
  let query = {}
  if (searchTerm) {
    query = {
      $or: [
        { brand: new RegExp(searchTerm, 'i') },
        { model: new RegExp(searchTerm, 'i') },
        { category: new RegExp(searchTerm, 'i') },
      ],
    }
  }
  const result = await Car.find(query)
  return {
    message: 'Cars retrieved successfully',
    status: true,
    data: result,
  }
}

const getSingleCar = async (id: string) => {
  const result = await Car.findById(id)
  return result
}

const updateCar = async (id: string, data: ICar) => {
  const result = await Car.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteCar = async (id: string) => {
  const result = await Car.findByIdAndDelete(id)
  return result
}

export const carService = {
  createCar,
  getCar,
  getSingleCar,
  updateCar,
  deleteCar,
}
