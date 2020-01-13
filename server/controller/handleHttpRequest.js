const query = require('../model/query')
const router = require('express').Router()
const getIndices = require('../model/getIndices')
let listOfTypes, total


async function getInitialData (){
    listOfTypes = await query.getAllTypes()
    total = await query.getNumOfAllData()
}

router.get('/', async (req, res, next)=> {
    let answer
    await getInitialData()
    answer = await getIndices.getIndices(total, listOfTypes)
    res.send({listOfTypes, answer, source:await getIndices.getNumOfEachType(listOfTypes)})
})
module.exports=router