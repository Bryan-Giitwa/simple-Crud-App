import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { config } from "./Db/config.js"; // Import config and connectToDatabase from config.js
import { connectToDatabase } from "./Db/config.js";
import Routes from "./Routes/routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Enable CORS middleware
app.use(function (req, res, next) {
  const allowedOrigin = "http://localhost:5173";
  const requestOrigin = req.headers.origin;

  // Allow requests only from the specified origin
  if (requestOrigin && requestOrigin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routesx
Routes(app);

app.get("/", (req, res) => {
  res.send("Hello this is a Simple CRUD App!");
});

// Connect to the database before starting the server
connectToDatabase()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit with error code
  });
