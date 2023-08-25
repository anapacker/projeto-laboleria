import { Router } from "express";
import cakeRoute from "./cake.router.js";
import clientsRoute from "./clients.router.js";
import orderRoute from "./order.route.js";
import flavoursRoute from "./flavours.router.js";

const router = Router()
router.use(cakeRoute)
router.use(clientsRoute)
router.use(orderRoute)
router.use(flavoursRoute)

export default router