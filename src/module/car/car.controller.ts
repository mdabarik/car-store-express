import { Request, Response } from 'express'
import { carService } from './car.service'

const createCar = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const result = await carService.createCar(body)
    res.status(200).send({
      success: true,
      message: 'Car created successfully',
      result: result,
    })
  } catch (error) {
    res.status(400).send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getCar = async (req: Request, res: Response) => {
  try {
    const result = await carService.getCar()
    res.status(200).send({
      success: true,
      message: 'Car get successfully',
      result: result,
    })
  } catch (error) {
    res.status(400).send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const result = await carService.getSingleCar(carId)
    res.status(200).send({
      success: true,
      message: 'Car get successfully',
      result: result,
    })
  } catch (error) {
    res.status(400).send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const body = req.body
    const result = await carService.updateCar(carId, body)
    res.status(200).send({
      success: true,
      message: 'Car updated successfully',
      result: result,
    })
  } catch (error) {
    res.status(400).send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const result = await carService.deleteCar(carId)
    res.status(200).send({
      success: true,
      message: 'Car deleted successfully',
      result: result,
    })
  } catch (error) {
    res.status(400).send({
      success: true,
      message: 'Something went wrong',
      error: error,
    })
  }
}

export const carController = {
  createCar,
  getCar,
  getSingleCar,
  updateCar,
  deleteCar,
}
