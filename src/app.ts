import express, { Request, Response } from 'express'

const app = express()

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
