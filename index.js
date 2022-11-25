require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//Routes
app.use(require('./rout'));
//Static Content
app.use(express.static(path.join(__dirname,'')));

app.listen(3000);
console.log('Server listening...')