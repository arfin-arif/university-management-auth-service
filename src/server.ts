import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`\nDatabase connected `)

    app.listen(config.port, () => {
      console.log(`listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(`Failed to connected the database`)
  }
}
bootstrap()
