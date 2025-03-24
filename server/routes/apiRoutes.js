const express = require("express");
const router = express.Router();
const {getBasket,addBasket} = require("../controllers/basketController");
const {getCategories,addCategory, deleteCategory} = require("../controllers/categoryController");
const {getFav,addFav} =  require("../controllers/favController");
const {getLastViewed} = require("../controllers/lastViewedController");
const {loginController} = require("../controllers/loginController");
const {getMessage,addMessage} = require("../controllers/messageController");
const{registerController} = require("../controllers/registerController");
const {addProduct,getAllProducts,deleteProduct} = require("../controllers/productController");
router.get("/basket",getBasket);
router.post("/basket",addBasket);

router.get("/category",getCategories);
router.post("/category",addCategory);
router.delete("/category",deleteCategory);


router.get("/fav",getFav);
router.post("/fav",addFav);


router.get("/lastViewed",getLastViewed);

router.post("/login",loginController);


router.get("/message",getMessage);
router.post("message",addMessage);

router.post("/register",registerController);

router.post("/product",addProduct);
router.get("/product",getAllProducts);
router.delete("/product",deleteProduct);

module.exports = router;

