const mongoose = require("mongoose");
const BasketModel = require("./BasketModel");
const FavModel= require("./FavModel");
const LastViewedModel= require("./LastViewedModel");

const UserModel = mongoose.Schema({
     username:{tpye:String , required:true},
     password : {type:String, required:true},
     basket : [{type: mongoose.Schema.ObjectId , ref:"BasketModel"}],
     fav: [{type:mongoose.Schema.ObjectId , ref:"FavModel"}],
     lastViewed : [{type:mongoose.Schema.ObjectId , ref:"lastViewedModel"}]
});

mongoose.model("UserModel",UserModel, "Users");