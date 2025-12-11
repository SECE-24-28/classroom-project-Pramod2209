const express =require("express");
const { getProduct } = require("../controller/ProductController");
const router=express.Router();

router.get("/sleepingproduct",getProduct)

module.exports=router;