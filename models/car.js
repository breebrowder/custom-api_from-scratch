// Allows us to create a model that we can use to interact with the database in an easy way
const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    year: {

    },
    VIN: {

    }

})

module.exports = mongoose.model('Car', carSchema)