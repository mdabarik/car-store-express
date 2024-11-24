import { Router } from 'express'
import { orderController } from './order.controller'

const orderRoute = Router()

orderRoute.post('/', orderController.createOrder)

export default orderRoute
