import express from "express";
import { runCode } from "../controllers/code.controller.js";
const router = express.Router();

router.post("/run", (req,res)=>{runCode(req, res)});

export default router;
