import Joi from "joi"

export const orderSchema = Joi.object({
  clientId: Joi.number().integer().required(),
  cakeId:Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).max(5).required(),
  totalPrice:Joi.number().integer().required()
})