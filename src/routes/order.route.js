import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { orderSchema } from "../schemas/orders.schemas.js";
import { createOrder, getOrderById, getOrders } from "../controllers/order.controller.js";


const orderRoute = Router()
orderRoute.post("/order", validateSchema(orderSchema), createOrder)
orderRoute.get("/order", getOrders)
orderRoute.get("/order/:id", getOrderById)

export default orderRoute