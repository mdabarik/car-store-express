import { Router } from 'express'
import { orderController } from './order.controller'

const orderRoute = Router()

orderRoute.post('/', orderController.createOrder)
orderRoute.get('/revenue', orderController.computeTotalRevenue)

export default orderRoute
