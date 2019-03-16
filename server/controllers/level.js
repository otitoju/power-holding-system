const level = require('../models/400level')
const monday = require('../models/monday')


//find all the days of the week
exports.findAll = async (req, res) => {
    const info = await level.find().populate("other")
    res.json({info:info})
    
}

//find a single day of the week.
exports.getSingleDay = async (req, res) => {
    level.findById(req.params.id).populate("other").exec(function (err, foundDay) {
        if (err) {
            console.log(err);
        } else {
            const others = foundDay.other
            ///console.log(foundCampground.comment)
            res.json({info:foundDay, other:others})

        }
    });
}

//post new day
exports.postDay = async (req, res) => {
    if(!req.body.day){
        res.json({message:'Error: Empty field',sucess:false})
    }
    else{
        const info = await level.create(req.body)
        res.json({info:info,sucess:true})
    }
    
}


//post new course with respect to the day 
exports.createMonday = async(req, res) => {
    
    level.findOne({_id:req.params.id}, (err, recipe) => {
        if(err){
            console.log(err)
        }
        else{
            monday.create(req.body, (err, comment)=>{
                if(err){
                    console.log(err)
                }
                else{
                    //res.json(comment)

                    const comments = recipe.other
                    

                    // //push comment to recipe model
                    comments.push(comment)
                     recipe.save()

                     res.json({message:`Successfully added comment!`,info:comment})
                }
            })
        }
    })
}
//update course details
exports.updateCourse = async (req, res) => {
    const info = await monday.findOne({_id:req.params.id})
    if(!info){
        res.json({message:'No course found'})
    }
    else{
        info.course = req.body.course || info.course
        info.time = req.body.time || info.time
        info.lecturer = req.body.lecturer || info.lecturer
        info.class = req.body.class || info.class
        info.title = req.body.title || info.title
        info.unit = req.body.unit || info.unit
        await info.save()
        res.json({
            message:'Course updated.'
        })
    }
}

//delete a course
exports.deleteCourse = async (req, res) => {
    const info = await monday.findOneAndDelete({_id:req.params.id})
    res.json({message:'course deleted.'})
}
//delete a getSingleDay
exports.deleteDay = async (req, res) => {
    const info = await level.findOneAndDelete({_id:req.params.id})
    res.json({message:'day deleted.'})
}

exports.getSingleCourse = async (req, res) => {
    monday.findById(req.params.id).populate("level").exec(function (err, foundCourse) {
        if (err) {
            console.log(err);
        } else {
            const others = foundCourse.level
            
            res.json({info:foundCourse, other:others})

        }
    });
}

exports.findAllCourse = async (req, res) => {
    const info = await monday.find()
    res.json(info)
}