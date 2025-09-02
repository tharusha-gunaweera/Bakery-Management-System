// mongodb username - sahana2002 & mongodb password - QhO31A3P9hnHysvq

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://sahana2002:QhO31A3P9hnHysvq@cluster0.wptflp0.mongodb.net/")
.then(()=> console.log("connected to mongoDB"))
.then(()=> {
    app.listen(4000);
})
.catch((err)=> console.log((err))); 

