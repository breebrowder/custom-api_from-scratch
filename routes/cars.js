// create variable that pulls in express library
const express = require('express')
const router = express.Router()
const Car = require('../models/car')

// Routes needed:

// Getting all
router.get('/', async (req, res) => {
    try {
      const cars = await Car.find()
      res.json(cars)
    } catch (err) {
      res.status(500).json({message: err.message })
    }

})

// Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one
router.post('/', (req, res) => {

})

// Updating One
router.patch('/:id', (req, res) => {

})

// Deleting One
router.delete('/:id', (req, res) => {

})













module.exports = router;