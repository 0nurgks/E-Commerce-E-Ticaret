const express = require("express");
const app = express();
const {getBasket,addBasket} = require("../controllers/basketController");
const {getCategories} = require("../controllers/categoryController");
const {getFav,addFav} =  require("../controllers/favController");
const {getLastViewed} = require("../controllers/lastViewedController");
const {loginController} = require("../controllers/loginController");
const {getMessage,addMessage} = require("../controllers/messageController");
const{registerController} = require("../controllers/registerController");

app.get("/basket",getBasket);
app.post("/basket",addBasket);

app.get("/category",getCategories);

app.get("/fav",getFav);
app.post("/fav",addFav);


app.get("/lastViewed",getLastViewed);

app.post("/login",loginController);


app.get("/message",getMessage);
app.post("message",addMessage);

app.post("/register",registerController);

module.exports = router;

