import { Router } from "express";
import cakeRoute from "./cake.router.js";
import clientsRoute from "./clients.router.js";

const router = Router()
router.use(cakeRoute)
router.use(clientsRoute)

export default router