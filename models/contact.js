const mongoose =require("mongoose");

//create a schma that is stored in that way you want to store;

const contactSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    aim:{
        type:Number,
        require:true
    }
});

//for collection name into database;

const Contact =mongoose.model('contact',contactSchema);

// we are exports the our folder;
module.exports =Contact;