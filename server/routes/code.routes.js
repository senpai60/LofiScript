import express from "express";
import { runAndCheck } from "../controllers/code.controller.js";

const router = express.Router();

router.post("/run/:problemId", runAndCheck);

export default router;
