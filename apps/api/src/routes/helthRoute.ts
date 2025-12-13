import { Router } from "express";
import { healthCheck } from "../controller/healthContorller";

const router = Router();

router.get("/", healthCheck);

export default router;
