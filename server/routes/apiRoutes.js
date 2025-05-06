const express = require("express");
const router = express.Router();
const {getBasket,addBasket,removeFromBasket} = require("../controllers/basketController");
const {getCategories,addCategory, deleteCategory} = require("../controllers/categoryController");
const {getFav,addFav,removeFromFav} =  require("../controllers/favController");
const {getLastViewed} = require("../controllers/lastViewedController");
const {loginController} = require("../controllers/loginController");
const {getMessage,addMessage} = require("../controllers/messageController");
const{registerController} = require("../controllers/registerController");
const {addProduct,getAllProducts,deleteProduct,getProductByCategory,getProductById} = require("../controllers/productController");
const {authenticateToken} = require("../middlewares/authenticateToken");

router.get("/basket",authenticateToken,getBasket);
router.post("/basket",authenticateToken,addBasket);
router.delete("/basket",authenticateToken,removeFromBasket);

router.get("/category",getCategories);
router.post("/category",addCategory);
router.delete("/category",deleteCategory);


router.get("/fav",authenticateToken,getFav);
router.post("/fav",authenticateToken,addFav);
router.delete("/fav",authenticateToken,removeFromFav);

router.get("/lastViewed",getLastViewed);

router.post("/login",loginController);


router.get("/message",getMessage);
router.post("message",addMessage);

router.post("/register",registerController);

router.post("/product",addProduct);
router.get("/product",getAllProducts);
router.get("/getProductByCategory",getProductByCategory);
router.get("/getProductById",getProductById);

router.delete("/product",deleteProduct);

module.exports = router;

