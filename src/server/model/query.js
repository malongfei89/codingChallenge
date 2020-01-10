const mongo = require('./mongodb-connection')

const query = {
    async getNumOfAllData(){
        return (await mongo.conn).collection('coding').countDocuments({})
    },
    async getAllTypes(){
        return (await mongo.conn).collection('coding').distinct('type')
    },
    async getNumByType(targetType){
        return (await mongo.conn).collection('coding').countDocuments({
            type: targetType
        })
    }
}
module.exports = query