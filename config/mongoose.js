const mongoose =require("mongoose");


mongoose.connect("mongodb://localhost/contact_list_db", { useNewUrlParser: true, useUnifiedTopology: true });

const db =mongoose.connection;

db.on('error',console.error.bind(console,'error to connect the database'))

db.once('open',function(){
    console.log("database is successfully connection");
})
