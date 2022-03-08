const express=require("express");
const app=express()
const blogRoute=require('./routes/blogRoute')
const cors=require("cors")
app.use(cors())

const PORT = process.env.PORT || 8000;


app.use("/api/v1",blogRoute)
app.listen(PORT,()=>{
    console.log("application connection successful");
})