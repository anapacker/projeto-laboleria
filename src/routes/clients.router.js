import { Router } from "express";
import { clientsSchema } from "../schemas/clients.schemas.js";
import { createClients } from "../controllers/clients.controller.js";
import { validateSchema } from "../middlewares/validate.schema.js";


const clientsRoute = Router()
clientsRoute.post("/clients", validateSchema(clientsSchema), createClients)

export default clientsRoute