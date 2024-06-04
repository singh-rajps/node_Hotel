const express = require('express')
const app = express()
//const cors = require("cors"); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = require('./db')

const port = 4500



// const mongoose = require('mongoose');

// mongoose.connect( 
//     "mongodb://localhost:27017/", 
//     { 
//       dbName: "hotels", 
//       useNewUrlParser: true, 
//       useUnifiedTopology: true, 
//     }, 
//     (err) => 
//       err ? console.log(err) : console.log("Connected to hotels database"));






app.get('/', (req, res) => {
    res.send('Hello World!')
})



const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemsRouter')

app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})