import { Router } from "express";
import { clientsSchema } from "../schemas/clients.schemas.js";
import { createClients, getClientOrdersById } from "../controllers/clients.controller.js";
import { validateSchema } from "../middlewares/validate.schema.js";


const clientsRoute = Router()
clientsRoute.post("/clients", validateSchema(clientsSchema), createClients)
clientsRoute.get("/clients/:id/order", getClientOrdersById)

export default clientsRoute