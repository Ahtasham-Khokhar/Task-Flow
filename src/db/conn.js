const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dynamicWeb").then(()=>{
    console.log("Connection Successfully with MongoDB Compass")
}).catch((err)=>{
    console.log("Error With Connection of MongoDB is "+ err)
})