import express from "express";
import { getResponse } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", getResponse);

// ✅ Use default export
export default router;
