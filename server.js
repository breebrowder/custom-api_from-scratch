require('dotenv').config()

// create variable that pulls in express library
const express = require('express')
// create variable used to configure server
const app = express()
//  create variable that pulls in mongoose library
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// on error log that there is an error if problem connecting to database
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// setup server to use json
app.use(express.json())

const sportsCarRouter = require('./routes/cars')
app.use('/cars', sportsCarRouter)


// URL is 'localhost:3000/cars'. Anything with this url or anything like 'localhost:3000/cars/anything' goes into the sportsCarRouter

app.listen(3000, () => console.log('The server has started!'))