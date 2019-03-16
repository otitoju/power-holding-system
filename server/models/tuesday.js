const mongoose = require('mongoose')
const tuesdaySchema = new mongoose.Schema({
    course:String,
    time:String,
    lecturer:String,
    class:String,
    level:{type:mongoose.Schema.Types.ObjectId, ref:'four'}
})
module.exports = mongoose.model('tuesday', tuesdaySchema)