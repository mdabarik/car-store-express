/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { carService } from './car.service'
import {
  carUpdateValidationSchema,
  carValidationSchema,
} from './car.validation'

const createCar = async (req: Request, res: Response) => {
  try {
    const body = req.body

    const { error } = carValidationSchema.validate(body)

    if (error) {
      res.status(400).send({
        message: 'Something went wrong',
        success: false,
        error: error,
        stack: error.stack,
      })
      return
    }

    const result = await carService.createCar(body)
    res.status(200).send({
      message: 'Car created successfully',
      success: true,
      data: result,
    })
  } catch (error: any) {
    res.status(400).send({
      message: 'Something went wrong',
      success: false,
      error: error,
      stack: error.stack,
    })
  }
}

const getCar = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm
    // console.log(req.query.searchTerm)
    const result = await carService.getCar(searchTerm as string)

    res.status(200).send({
      message: 'Cars retrieved successfully',
      status: true,
      data: result?.data,
    })
  } catch (error: any) {
    res.status(400).send({
      message: 'Fail to retrieve cars',
      success: false,
      error: error,
      stack: error.stack,
    })
  }
}

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const result = await carService.getSingleCar(carId)
    res.status(200).send({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error: any) {
    res.status(400).send({
      message: 'Failed to retrieve car',
      success: false,
      error: error,
      stack: error.stack,
    })
  }
}

const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const body = req.body

    // joi validation
    const { error } = carUpdateValidationSchema.validate(body)
    if (error) {
      res.status(400).send({
        message: 'Something went wrong',
        success: false,
        error: error,
        stack: error.stack,
      })
      return
    }

    const result = await carService.updateCar(carId, body)
    res.status(200).send({
      message: 'Car updated successfully',
      status: true,
      data: result,
    })
  } catch (error: any) {
    res.status(400).send({
      message: 'Fail to update car',
      success: false,
      error: error,
      stack: error.stack,
    })
  }
}

const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    await carService.deleteCar(carId)
    res.status(200).send({
      message: 'Car deleted successfully',
      status: true,
      data: {},
    })
  } catch (error: any) {
    res.status(400).send({
      message: 'Failed to delete car',
      success: false,
      error: error,
      stack: error.stack,
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
