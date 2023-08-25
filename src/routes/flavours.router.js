import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { flavoursSchema } from "../schemas/flavours.schemas.js";
import { createFlavours } from "../controllers/flavours.controlls.js";

const flavoursRoute = Router()
flavoursRoute.post("/flavours", validateSchema(flavoursSchema), createFlavours)

export default flavoursRoute