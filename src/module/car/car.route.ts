import { Router } from 'express'
import { carController } from './car.controller'

const carRouter = Router()

carRouter.get('/:carId', carController.getSingleCar)
carRouter.get('/', carController.getCar)
carRouter.post('/', carController.createCar)
carRouter.put('/:carId', carController.updateCar)
carRouter.delete('/:carId', carController.deleteCar)

export default carRouter
