require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/route')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)
const db = require('./configuration/db')
const errorHandler = require('./handlers/errorHandler')
const port = 4500


app.get('/', (req, res) => {
    res.send(`<h1>Power holding server</h1>`)
})

//page not found
app.use(errorHandler.notFound)

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandler.developmentErrors);
  }
  
  // production error handler
  app.use(errorHandler.productionErrors);
// database connection
mongoose.Promise = global.Promise
mongoose.connect(db.mongoURI,{ useNewUrlParser: true })
    .then( () => {
        app.listen(port, () => {
            console.log(`power holding is using ${port}`)
        })
    } )
    .catch( err => console.log(err))