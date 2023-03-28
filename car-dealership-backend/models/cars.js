const mongoose = require('mongoose')
const Schema = mongoose.Schema


const carsSchema = new Schema(
    {
        name: String,
        image: String,
        type: String,
        year: Number

    }
)

const Cars = mongoose.model('Cars', carsSchema)
module.exports = Cars