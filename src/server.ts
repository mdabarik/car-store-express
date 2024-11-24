import app from './app'
import config from './config'
import mongoose from 'mongoose'

async function server() {
  console.log(config.database_url)
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`server running on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
