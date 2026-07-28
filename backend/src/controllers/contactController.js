const Contact = require("../models/Contact");


// CREATE CONTACT

const createContact = async (req, res) => {

  try {

    const contact = await Contact.create({

      name: req.body.name,

      email: req.body.email,

      phone: req.body.phone,

      company: req.body.company,

      service: req.body.service,

      message: req.body.message

    });


    res.status(201).json({

      success:true,

      message:"Contact submitted successfully",

      data:contact

    });


  } catch(error) {


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};




// GET CONTACTS

const getContacts = async(req,res)=>{

  try{


    const contacts =
    await Contact.find()
    .sort({
      createdAt:-1
    });


    res.json({

      success:true,

      data:contacts

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};




// DELETE CONTACT

const deleteContact = async(req,res)=>{

  try{


    const contact =
    await Contact.findById(
      req.params.id
    );



    if(!contact){

      return res.status(404).json({

        success:false,

        message:"Contact not found"

      });

    }



    await contact.deleteOne();



    res.json({

      success:true,

      message:"Contact deleted successfully"

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};




module.exports = {

  createContact,

  getContacts,

  deleteContact

};