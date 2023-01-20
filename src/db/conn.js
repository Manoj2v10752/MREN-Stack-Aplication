const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://test123:manoj@cluster0.keuprot.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("The connection is sucessfully")
}).catch((err)=>{
    console.log("The connection is not sucessfully")
})