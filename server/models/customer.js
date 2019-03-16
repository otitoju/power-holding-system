const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const customerSchema = new mongoose.Schema({
    surname:{type: String, trim: true},
    firstname: {type: String, trim: true},
    lastname: { type: String, trim: true},
    address: String,
    phone: Number,
    email: String,
    password: String
})
customerSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('customer', customerSchema)