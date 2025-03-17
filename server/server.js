const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const apiRoutes= require("./routes/apiRoutes");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyparser.json());

const router = express.Router();

app.router("/server",apiRoutes);

mongoose.connect(process.env.MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("mongodb bağlantısı başarılı")).catch(console.log("mongodb bağlantı hatası"));

app.listen(process.env.PORT , ()=>{
    console.log("server is running on "+process.env.PORT );
})
