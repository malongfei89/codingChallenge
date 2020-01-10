const query = require('../model/query')
const router = require('express').Router()
const getIndices = require('../model/getIndices')
let listOfTypes, total, answer


async function getInitialData (){
    listOfTypes = await query.getAllTypes()
    total = await query.getNumOfAllData()
}

router.get('/', async (req, res, next)=> {
    await getInitialData()
    answer = await getIndices(total, listOfTypes)
    res.send({listOfTypes, answer})
    
})
module.exports=router