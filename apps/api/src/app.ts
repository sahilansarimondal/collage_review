import express from "express";
import itemRoutes from "./routes/itemRoutes";
import healthRoute from "./routes/helthRoute";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

// routes
app.use("/api/items", itemRoutes);
app.use("/api/health", healthRoute);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
