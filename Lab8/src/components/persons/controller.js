import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import CrearPerson from './application/crearPerson'

const PersonRepository = new MongoPersonRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const crearPerson = async (req, res, next) => {
  try {
    const query = CrearPerson({ PersonRepository })
    const person = await query(req.body)
    res.status(201).json({
      data: person,
      message: 'created'
    })
  } catch (e) {
    next(e)
  }
}
