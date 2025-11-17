import { connectDB } from "./config/connectDB.config.js";
connectDB()

import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import {corsOption} from './config/corsOptions.config.js'

import codeRoutes from "./routes/code.routes.js";
import usersRoutes from "./routes/user.routes.js"
import problemInjectRoutes from "./routes/problemInject.routes.js"
import playlistInjectRoutes from "./routes/playlistInject.routes.js";
import playlistsRoutes from "./routes/playlists.routes.js";

const app = express();

// =============================
// 🚀 Middlewares
// =============================
app.use(morgan("dev"));              // Request logger
app.use(cors(corsOption)); 
app.use(cookieParser())                    // Enable CORS
app.use(helmet());                   // Basic security headers
app.use(express.json());             // Parse JSON body
app.use(express.urlencoded({ 
  extended: true 
}));                                 // Parse form-data

// =============================
// 📌 Health Check Route
// =============================
app.get("/", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Server is up and running 🚀" 
  });
});

// =============================
// 🛣️ API Routes
// =============================
app.use("/code", codeRoutes);
app.use('/users',usersRoutes)
app.use("/playlists", playlistsRoutes);
app.use("/inject-problems",problemInjectRoutes)
app.use("/inject-playlist", playlistInjectRoutes);


// =============================
// ❗ Global Error Handler
// =============================
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// =============================
// ❓ 404 Handler
// =============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
