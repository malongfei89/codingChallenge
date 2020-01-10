const app = require('express')()
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./controller/handleHttpRequest')

app.use(bodyParser.json())
app.use(require('cors')())
app.listen(3003, ()=>console.log('listen at 3003'))
// app.get('/', (req, res, next) => {
//     console.log('get')
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     .end('<h1>Hello World</h1>')
// })
app.use(morgan('combined'))
app.use('/',router)

//handle error
app.use((error, req, res, next) => {
    console.log(error)
    if(error.name === 'MongoError'){
        switch(error.code){
            default:
        }
    } else if(error.name==='CustomError') res.status(error.status).send({error: error.message})
})