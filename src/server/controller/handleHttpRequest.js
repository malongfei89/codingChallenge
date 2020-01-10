const router = require('express').Router()
const mongoConn = require('../model/mongodb-connection')
const query = require('../model/query')
let listOfTypes
let total
let pool = []
router.get('/', async (req, res, next)=> {
    total = await query.getNumOfAllData()
    listOfTypes = await query.getAllTypes()
    res.send({total, listOfTypes})
    for(let i = 0;i<total;i++) pool.push(i)
})
router.post('/', async (req, res, next) => {
    const numOfThisType = await query.getNumByType(req.body.targetType)
    console.log(numOfThisType)
    let step = Math.floor(total/numOfThisType)
    let startIndex = listOfTypes.findIndex(item => item===req.body.targetType)
    let answer= []
    for(let i = 0;i< numOfThisType;i++){
        while(startIndex>= pool.length || pool[startIndex]===null){
            if(startIndex >= pool.length){
                startIndex = pool.findIndex(item => item !== null)
                break
            } else startIndex++
        }
        answer.push(startIndex)
        pool[startIndex]=null
        startIndex+=step
    }
    res.send(answer)
})
module.exports=router