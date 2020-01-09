const {MongoClient, ObjectID} = require('mongodb')
const url = process.env.MONGODB_URL

const mongo = {
    conn: (async function () {
    const client = new MongoClient(url, { poolSize: 15, useUnifiedTopology: true })
    await client.connect()
    return client.db(process.env.MONGODB_DB)
    })(),
    objectId: ObjectID
}

module.exports = mongo