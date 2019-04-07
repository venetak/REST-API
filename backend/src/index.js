const server = require('./server')
const routes = require('./routes')
const express = require('express')
const app = express()
const urlencoded = require('body-parser').urlencoded
const session  = require('express-session')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Store', { useNewUrlParser: true })

app.use(urlencoded({extended: true}))
app.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true
}))
routes(app)
server.start(app)

