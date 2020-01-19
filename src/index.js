import express from 'express'
import bodyParser from 'body-parser'
import router from './router/index'


const app = express()



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

app.listen(3000)
export default app
