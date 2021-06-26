// const express = require('express')
import express from 'express'
import apiAgenda from './routes/agenda'
import helmet from 'helmet'
import morgan from 'morgan'

import errorHandler from './utils/middlewares/errorHandlers'
import notFoundHandler from './utils/middlewares/notFoundHandler'

import { config } from './config'

const app = express()

app.use(morgan('common'))
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', apiAgenda)

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red;">Error 404</h1>')
})

// catch 404 and forward to error handler
app.use(notFoundHandler)

// middlewares
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
