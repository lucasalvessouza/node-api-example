require('dotenv').config()
const express = require('express')
const app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Ola'))
app.use('/api', require('./api'))

app.listen(3000, () => console.log('Node running...'))