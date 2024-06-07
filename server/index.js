import express from "express"
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
import dotenv from "dotenv"
// import cors from "cors"
// import cookieParser from "cookie-parser"
// import { Connection } from "./database/db.js";
import "./database/db.js"



dotenv.config();
const app = express();

app.use(express.json())
// app.use(cors())
// app.use(cookieParser())

// Why Express JS?

// Express was created to make APIs and web applications with ease,
// It saves a lot of coding time almost by half and still makes web and
// mobile applications are efficient.
// Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous


app.use(express.json());




app.get("/", (req,res)=>{
  res.status(200).send("Server is running")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
