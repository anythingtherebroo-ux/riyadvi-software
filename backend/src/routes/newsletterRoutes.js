const express = require("express");

const router = express.Router();



const {

subscribeNewsletter,

getSubscribers,

deleteSubscriber

} = require("../controllers/newsletterController");




// CREATE

router.post(

"/",

subscribeNewsletter

);




// GET ALL

router.get(

"/",

getSubscribers

);




// DELETE

router.delete(

"/:id",

deleteSubscriber

);



module.exports = router;