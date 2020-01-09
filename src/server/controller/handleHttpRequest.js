const router = require('express').Router()
const mongoConn = require('../model/mongodb-connection')
const query = require('../model/query')

router.get('/', (req, res, next)=> {
    res.sendStatus(200)
})
module.exports=router