const mongo = require('./mongodb-connection')

const query = {
    async getNumOfAllData(){
        return (await mongo.conn).collection('testData').countDocuments({})
    },
    async getAllTypes(){
        return (await mongo.conn).collection('testData').distinct('type')
    },
    async getNumByType(targetType){
        return (await mongo.conn).collection('testData').countDocuments({
            type: targetType
        })
    }
}
module.exports = query