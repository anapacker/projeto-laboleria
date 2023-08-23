import { Router } from "express";
import cakeRoute from "./cake.router.js";

const router = Router()
router.use(cakeRoute)

export default router