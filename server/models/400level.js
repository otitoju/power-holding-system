const mongoose = require('mongoose')

const level400 = new mongoose.Schema({
    day:String,
    semester:String,
    other:[{
            type:mongoose.Schema.Types.ObjectId, ref:'monday'
         }],
    // monday:[{
    //     type:mongoose.Schema.Types.ObjectId, ref:'monday'
    // }],
    // tuesday:[{
    //     type:mongoose.Schema.Types.ObjectId, ref:'tuesday'
    // }]
})
module.exports = mongoose.model('four', level400)