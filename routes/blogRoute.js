const express=require("express")
const router=express.Router();
const blogcontroller=require('../controllers/getData')

router.route("/blog").get(blogcontroller);
router.route("/blog/category/:id").get(blogcontroller);




module.exports=router;