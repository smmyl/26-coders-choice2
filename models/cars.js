const mongoose = require('mongoose')
const Schema = mongoose.Schema


const carsSchema = new Schema(
    {
        name: String,
        image: String,
        year: String,
        type: String

    }
)

const Cars = mongoose.model('Cars', carsSchema)
module.exports = Cars