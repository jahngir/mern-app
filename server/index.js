const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModal = require("./models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
// const UserRouter = require("./routes/user");
// const PostRouter = require("./routes/post");



dotenv.config();
const app = express();

// Why Express JS?

// Express was created to make APIs and web applications with ease,
// It saves a lot of coding time almost by half and still makes web and
// mobile applications are efficient.
// Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous

// restrictions for API which page to asscess and which not in cors

app.use(express.json());
// app.use(cookieParser());
// app.use(express.static('storage'))
// mongoose.connect(process.env.MONGO_DB);


//New Auth API
// app.use('/auth',UserRouter)

// app.use('/api',PostRouter)

app.get("/", (req,res)=>{
  res.status(200).send("Server is running")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
