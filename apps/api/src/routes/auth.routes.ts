import { ExpressAuth } from "@auth/express";
import Google from "@auth/express/providers/google";
import express from "express";

const app = express();

app.set("trust proxy", true);
app.use("/auth/*", ExpressAuth({ providers: [Google] }));
