const app = require('express')()
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const handleUpcomingTodo = require('./controller/handleUpcomingTodo')

// handleUpcomingTodo(10000) 
app.use(bodyParser.json())
app.use(require('cors')())
app.listen(3001, ()=>console.log('listen at 3001'))
// app.get('/', (req, res, next) => {
//     console.log('get')
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     .end('<h1>Hello World</h1>')
// })
app.use(morgan('combined'))
app.use('/',require('./controller/handleHttpRequest'))
// app.use('/api',require('./controller/handleApiRequest'))
app.use((error, req, res, next) => {
    console.log(error)
    if(error.name === 'MongoError'){
        switch(error.code){
            default:
        }
    } else if(error.name==='CustomError') res.status(error.status).send({error: error.message})
})