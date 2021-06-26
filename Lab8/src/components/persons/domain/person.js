import Joi from 'joi'

export const createPersonSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required()
})
