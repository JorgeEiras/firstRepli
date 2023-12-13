import mongoose from 'mongoose'
import { MONGODB_URI } from '../config.js'

mongoose.Promise = global.Promise;

export async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message)
  }
}
