const express = require("express");
const cors = require("cors");
const router  = require("./routes");

const port = process.env.PORT || 8000;
const app = express();  // creating server

app.use(cors());
app.use("/api/v1", router);

app.listen(port, ()=>{
    console.log("Application has started successfully");
});




