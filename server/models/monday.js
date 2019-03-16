const mongoose = require('mongoose')
const mondaySchema = new mongoose.Schema({
    course:String,
    time:String,
    lecturer:String,
    class:String,
    title:String,
    unit:Number,
    level:{type:mongoose.Schema.Types.ObjectId, ref:'four'}
})
module.exports = mongoose.model('monday', mondaySchema)