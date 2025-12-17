import express from "express";
import itemRoutes from "./routes/item.routes";
import healthRoute from "./routes/health.routes";
import { errorHandler } from "./middlewares/error.handler";

const app = express();
app.use(express.json());

// routes
app.use("/api/items", itemRoutes);
app.use("/api/health", healthRoute);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
