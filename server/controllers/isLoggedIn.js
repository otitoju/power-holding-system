const jwt = require('jsonwebtoken')
const customer = require('../models/customer')
const secret = require('../configuration/config')

const isLoggedIn = async (req, res, next) => {
    const token = await req.headers['authorization'].split(' ')[1]
    //const token = await req.headers['x-access-token']
    if(!token) {
        res.status(400).json({
            message:'No token provided or invalid token',
            success: false
        })
    }
    else{
        await jwt.verify(token, secret.nepa, (err, decoded) => {
            if(err){
                res.status(401).json({
                    message:'Alert: Authentication failed',
                    success: false
                })
            }
            else{
                req.customer = decoded
                next()
            }
        })
    }
}

module.exports = isLoggedIn