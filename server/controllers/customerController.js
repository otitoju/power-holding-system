const customer = require('../models/customer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../configuration/config')

//register customer
exports.registerCustomer = async (req, res, next) => {
    const body = req.body
    const emailExist = await customer.findOne({email: req.body.email})
    if( !body.surname || !body.firstname || !body.lastname || !body.address || !body.phone || !body.email || !body.password) {
        res.status(422).json({message:`All fields required`, success:false})
    }
    else if(emailExist){
        res.status(403).json({message:`The email you entered already exist`, success: false})
    }
    else{
        const hashpassword = bcrypt.hashSync(req.body.password, 10)
        const Customer = await customer.create(body)
        Customer.password = hashpassword
        await Customer.save()
        res.status(200).json({customer: Customer, success: true})
    }
}

//signin
exports.signIN = async (req, res, next) => {
    const body = req.body
    if(!body.email || !body.password){
        res.status(422).json({message:'All fields are required', success: false})
    }
    else {
        const Customer = await customer.findOne({email: body.email})
        if(!Customer){
            res.status(403).json({
                message:`Please check your email and try again`,
                success: false
            })
        }
        else{
            const passwordIsValid = bcrypt.compareSync(req.body.password, Customer.password)
            if(!passwordIsValid){
                res.status(403).json({
                    message:`Wrong password`,
                    success: false
                })
            }
            else{
                const token = jwt.sign({id: Customer.id, surname:Customer.surname, firstname: Customer.firstname, lastname: Customer.lastname, address: Customer.address, email: Customer.email, phone: Customer.phone}, config.nepa, {expiresIn: '5h'})
                let info = Customer._id
                res.status(200).json({message:'signing in was successful', success: true, token: token, info:info})
            }
        }
    }
}

//get all customer 
exports.allCustomer = async (req, res, next) => {
    const customers = await customer.find().sort({'_id': -1})
    res.status(200).json({customer: customers, success: true})
}

//get single customer
exports.getSingleCustomer = async (req, res, next) => {
    const customers = await customer.findOne({_id: req.params.id})
    res.status(200).json({customer: customers, success: true})
}

//delete a customer 
exports.deleteCustomer = async (req, res) => {
    const Customer = await customer.findOneAndDelete( {_id: req.params.id} )
    res.status(200).json({message:'deleted', success: true})
}

//update a customer
exports.updateCustomer = async (req, res) => {
    const body = req.body
    const emailExist = await customer.findOne({email: req.body.email})
    const Customer = await customer.findOne({_id: req.params.id})
    if(emailExist) {
        res.status(403).json({
            message:'Warning!!!: Email detected', success: false
        })
    }
    else{
        if(!Customer){
            res.status(403).json({message:'No customer with such id', success: false})
        }
            Customer.surname = body.surname || Customer.surname
            Customer.firstname = body.firstname || Customer.firstname
            Customer.lastname = body.lastname || Customer.lastname
            Customer.email = body.email || Customer.email
            Customer.phone = body.phone || Customer.phone
            await Customer.save()
            res.status(200).json({message:'you have successfully updated your profile', success: true, customer: Customer})
    }
}

//change of password
exports.changePassword = async (req, res) => {
    const body = req.body
    const changePassword = await customer.findOne({_id: req.params.id})
    const oldpassword = bcrypt.compareSync(body.oldpassword, changePassword.password)
    if(!body.password || !body.confirm || !body.oldpassword){
        res.status(422).json({
            message:'Warning!!!: Please fill all blank spaces',
            success: false
        })
    }
    else if(body.password != body.confirm){
        res.status(403).json({
            message:'Alert: Passwords do not match each other',
            success: false
        })
    }
    else if(!oldpassword){
        res.status(400).json({
            message:'Alert: Old password is incorrect',
            success: false
        })
    }
    else{
        const hashpassword = bcrypt.hashSync(req.body.password, 10)
        if(!changePassword){
            res.status(422).json({
                message: 'Warning!!!: No customer with such identity',
                success: false
            })
        }
        changePassword.password = hashpassword || changePassword
        await changePassword.save()
        res.status(200).json({
            message:'Password changed',
            success: true
        })
    }
}

// decode token
exports.decodeToken = async (req, res, next) => {
    const token = await req.headers['x-access-token']
    if(!token) {
        res.status(401).json({
            message:'No token provided',
            success: false
        })
    }
    else{
         jwt.verify(token, config.nepa, (err, decoded) => {
            if(err){
                res.status(500).json({
                    message:'Verification failed or invalid token'
                })
            }
            else if (!decoded){
                res.status(422).json({
                    message:'Token does not exist or expired'
                })
            }
            else{
                customer.findById(decoded.id, (err, customer) => {
                    if(err){
                        res.status(500).json({
                            message:"Decoding failed"
                        })
                    }
                    else{
                        res.status(200).json({
                            customer:customer
                        })
                    }
                })
            }
        })
    }
}
