const express = require("express");

const router = express.Router();


const {

createContact,

getContacts,

deleteContact

} = require("../controllers/contactController");



// CREATE

router.post(
"/",
createContact
);



// GET ALL

router.get(
"/",
getContacts
);



// DELETE

router.delete(
"/:id",
deleteContact
);



module.exports = router;