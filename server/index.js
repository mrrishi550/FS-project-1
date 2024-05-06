import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import bodyParser from "body-parser";
import router from "./routes/wine.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/drinks/wine", router);
mongoose
  .connect(
    "mongodb+srv://Rishi:Rishi437@cluster0.sbmtdeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db done");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(2010, () => {
  console.log("server running");
});
