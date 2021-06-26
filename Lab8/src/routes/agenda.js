import express from 'express'
import { persons } from '../utils/mockup'
import { crearPerson } from '../components/persons/controller'
import { createPersonSchema } from '../components/persons/domain/person'
import { validationHandler } from '../utils/middlewares/validationHandler'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/persons', (_, response) => {
  response.json(persons)
})

router.post('/api/persons', validationHandler(createPersonSchema), crearPerson)

export default router
