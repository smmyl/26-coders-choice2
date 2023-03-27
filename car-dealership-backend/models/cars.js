const mongoose = require('mongoose')
const Schema = mongoose.Schema


const carsSchema = new Schema(
    {
        name: String,
        image: String,
        year: Number,
        type: String

    }
)

const Cars = mongoose.model('Cars', carsSchema)
module.exports = Cars