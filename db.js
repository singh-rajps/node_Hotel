const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost:27017/hotels"

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
