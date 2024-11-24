import express, { Request, Response } from 'express'
import carRouter from './module/car/car.route'
import orderRoute from './module/order/order.route'
import cors from 'cors'

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use('/api/cars', carRouter)
app.use('/api/orders', orderRoute)

app.get('/', (req: Request, res: Response) => {
  try {
    res.send({
      status: true,
      message: 'Server Live',
    })
  } catch (error) {
    console.log(error)
  }
})

export default app
