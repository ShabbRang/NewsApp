import express from "express";
import mongoose from "mongoose";
import { add, check, getPrefs, userPrefs } from "./endpoint.mjs";

const port = 5000;
const ConnectionString =
  "mongodb+srv://shabb:sQ97Zk0BcDh89Z5N@cluster0.jgrhsib.mongodb.net/news?retryWrites=true&w=majority";
const app = express();

mongoose.connect(ConnectionString).then(console.log("Mongoose has connected"));

app.use(express.json());

app.post("/data", add);

app.post("/check/:email", check);

app.post("/userPreference", userPrefs);

app.get("/getPref/:email", getPrefs);

app.listen(port, () => {
  console.log("Server runing on 5000");
});
