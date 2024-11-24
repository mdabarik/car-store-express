/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { orderValidation } from './order.validation'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body

    // joi validation
    const { error } = orderValidation.validate(body)

    if (error) {
      res.status(400).send({
        message: 'Something went wrong',
        success: false,
        error: error,
        stack: error.stack,
      })
      return
    }

    const result = await orderService.createOrder(body)
    res.status(200).send({
      success: true,
      message: 'Car created successfully',
      result: result,
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

/*
const getCar = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getCar()

    res.status(200).send({
      success: true,
      message: 'Cars retrieved successfully',
      result: result,
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
      success: true,
      message: 'Car retrieved successfully',
      result: result,
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

    const result = await carService.updateCar(carId, body)
    res.status(200).send({
      success: true,
      message: 'Car updated successfully',
      result: result,
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
    const result = await carService.deleteCar(carId)
    res.status(200).send({
      success: true,
      message: 'Car deleted successfully',
      result: result,
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
*/

export const orderController = {
  createOrder,
}
