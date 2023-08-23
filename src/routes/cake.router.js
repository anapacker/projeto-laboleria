import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { cakeSchema } from "../schemas/cake.schemas.js";
import { createCake } from "../controllers/cake.controller.js";

const cakeRoute = Router()
cakeRoute.post("/cakes", validateSchema(cakeSchema), createCake)

export default cakeRoute