const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const apiRoutes= require("./routes/apiRoutes");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json({limit: '100mb'}));


app.use("/",apiRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("mongodb bağlantısı başarılı")).catch((err)=>console.log("mongodb bağlantı hatası",err));

app.listen(process.env.PORT , ()=>{
    console.log("server is running on "+process.env.PORT );
})
