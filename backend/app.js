import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connect from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import projectRoutes from "./routes/project.routes.js";

dotenv.config();

(async () => {
  try {
    await connect();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); 
  }
})();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(
  cors({
    origin: "https://lively-sand-0a321151e.6.azurestaticapps.net",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/ai", aiRoutes);


app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

export default app;
