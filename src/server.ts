import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`\nDatabase connected to ${config.database_url} `)

    app.listen(config.port, () => {
      console.log(`\nlistening on port ${config.port}`)
    })
  } catch (error) {
    console.log(`Failed to connected the database`)
  }
}
bootstrap()
