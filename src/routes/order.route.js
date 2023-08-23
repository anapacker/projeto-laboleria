import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { orderSchema } from "../schemas/orders.schemas.js";
import { createOrder } from "../controllers/order.controller.js";


const orderRoute = Router()
orderRoute.post("/order", validateSchema(orderSchema), createOrder)

export default orderRoute