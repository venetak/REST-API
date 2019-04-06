const server = require('./server')
const routes = require('./routes')
const express = require('express')
const app = express()
const urlencoded = require('body-parser').urlencoded

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Store', { useNewUrlParser: true })

app.use(urlencoded())
routes(app)
server.start(app)

