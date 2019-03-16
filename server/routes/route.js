const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandler')
const customerController = require('../controllers/customerController')
const verifyCustomer = require('../controllers/isLoggedIn')
const level = require('../controllers/level')


//customer routes
router.post('/customer', catchErrors(customerController.registerCustomer))
router.post('/signin', catchErrors(customerController.signIN))
router.get('/customers',  catchErrors(customerController.allCustomer))
router.get('/singlecustomer/:id', catchErrors(customerController.getSingleCustomer))
router.delete('/removecustomer/:id', catchErrors(customerController.deleteCustomer))
router.put('/updatecustomer/:id', catchErrors(customerController.updateCustomer))
router.put('/changepassword/:id', catchErrors(customerController.changePassword))
router.get('/decode', catchErrors(customerController.decodeToken))


router.get('/level', level.findAll)
router.post('/monday/:id', level.createMonday)
router.post('/day', level.postDay)
router.get('/day/:id', level.getSingleDay)
router.get('/courses/:id', level.getSingleCourse)
router.get('/course', level.findAllCourse)
router.put('/course/:id', level.updateCourse)
router.delete('/delcourse/:id', level.deleteCourse)
router.delete('/delday/:id', level.deleteDay)
module.exports = router