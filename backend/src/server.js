import express from "express";
import { ENV } from "./lib/env";

const app = express();
const PORT = process.env.PORT;

app.get("/health", (req,res) => {
  res.status(200).json({msg: "api is up and running"});
})

app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));