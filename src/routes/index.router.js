import { Router } from "express";
import cakeRoute from "./cake.router.js";
import clientsRoute from "./clients.router.js";
import orderRoute from "./order.route.js";

const router = Router()
router.use(cakeRoute)
router.use(clientsRoute)
router.use(orderRoute)

export default router