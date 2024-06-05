const mongoose = require('mongoose')
require('dotenv').config()

const mongoURL = "mongodb://localhost:27017/hotels"


const mongoURL1 = process.env.MONGODB_URL


mongoose.connect(mongoURL, {
    useNewUrlParser: true,      // Correct spelling
    useUnifiedTopology: true    // Correct spelling
}).then(() => {
    console.log('Connected to MongoDB server')
}).catch((err) => {
    console.log("MongoDB connection error:", err)
})

const db = connection () // Get the connection instance

db.on('error', (err) => {
    console.log("MongoDB connection error:", err)
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected')
})

module.exports = db
