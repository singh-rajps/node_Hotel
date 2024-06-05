const express = require('express')
const app = express()

//const cors = require("cors"); 
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const db = require('./db')

//Middleware function
const logRequest = (req,res,next)=>{
    console.log(`${new Date().toLocaleDateString()} Request made to ${originalURl}`);
    next();
}
app.use(logRequest);
app.get('/',(req, res) => {
    res.send('Hello World!')
})



const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemsRouter')

app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${port}`)
})