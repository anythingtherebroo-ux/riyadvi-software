const express = require("express");

const router = express.Router();


const {

registerAdmin,
loginAdmin,
getAdminStats

}=require("../controllers/adminController");



// create admin
router.post(
"/register",
registerAdmin
);



// login
router.post(
"/login",
loginAdmin
);



// dashboard stats
router.get(
"/stats",
getAdminStats
);



module.exports = router;