const express = require("express");
const mongoose = require("mongoose");
const user = require("./route/user")
const app = express();

const port = 3000;

const url = 'mongodb://localhost/facebook_clone'
mongoose.connect(url,{
    useNewUrlParser: true
});

const con = mongoose.connection
con.on("open",() => {
    console.log("mongodb created")
})

app.use(express.json());
app.use('/user',user);


app.listen(port,(req,res) => {
    console.log("Express 3000 port is started..");
})