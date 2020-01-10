const query = require('../model/query')
const router = require('express').Router()
const getIndices = require('../model/getIndices')
let listOfTypes, total, answer


async function getInitialData (){
    listOfTypes = await query.getAllTypes()
    total = await query.getNumOfAllData()
}

router.get('/', async (req, res, next)=> {
    //this if...else is optional, could only have the code in else block
    if(listOfTypes && answer) {
        res.send({listOfTypes, answer})
    } else{
        await getInitialData()
        answer = await getIndices(total, listOfTypes)
        res.send({listOfTypes, answer})
    }
})
module.exports=router