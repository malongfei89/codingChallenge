const query = require('./query')
const maxHeap = require('./Max-Heap')
let source = new maxHeap()

async function getNumOfEachType(listOfTypes){
    for(let aType of listOfTypes){
        let total = await query.getNumByType(aType)
        // console.log('type:', aType,'has', total,'nodes')
        source.insert({type:aType, total})
    }
}

//detailed explanation please see readme.md on github
module.exports= async function getIndices(total, listOfTypes){
    let answer = []
    await getNumOfEachType(listOfTypes)
    let temp = source.delete()
    answer.push(temp.type)
    if(temp.total-1>0) source.insert({type: temp.type, total:temp.total-1})
    while(answer.length<total){
        if(answer[answer.length-1]===source.peek().type){
            temp = source.delete()
            let temp2 = source.delete()
            answer.push(temp2.type)
            if(temp2.total-1>0)
            source.insert(temp, {type:temp2.type, total:temp2.total-1})
            else source.insert(temp)
        } else{
            temp = source.delete()
            answer.push(temp.type)
            if(temp.total-1>0)
            source.insert({type: temp.type, total:temp.total-1})
        }
    }
    return answer
}