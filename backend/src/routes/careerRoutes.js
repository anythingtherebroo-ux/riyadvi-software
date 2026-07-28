const express = require("express");

const router = express.Router();


const upload = require("../middleware/upload");


const {

applyCareer,

getApplications,

deleteApplication

} = require("../controllers/careerController");





// CREATE APPLICATION

router.post(

"/",

upload.single("resume"),

applyCareer

);




// GET APPLICATIONS

router.get(

"/",

getApplications

);




// DELETE APPLICATION

router.delete(

"/:id",

deleteApplication

);



module.exports = router;