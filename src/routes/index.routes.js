import { Router } from "express";
import { query } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", query);

export default router;
