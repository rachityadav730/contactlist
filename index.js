const express =require("express");
const path =require("path");
const port =8000;

const db =require("./config/mongoose");
const Contact =require("./models/contact");


const app =express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static("public"));

var contactList =[
    {
        name:"rachit",
        aim:"khpdi" 
    },
    {
        name:"rocky",
        aim:"duniya"
    }

]

app.get("/home",function(req,res){
    return res.render("home");
})
app.get("/",function(req,res)
{
    
    Contact.find({},function(err,contacts){
        if(err){
            console.err("error is coming from database");
            return;
        }
        
    
    return res.render('profile',{

        title:"my self coming from village area",
         contact_list: contacts
         });
        })


   
});
app.post("/create_contact",function(req,res){
    // console.log(req.body);
    // contactList.push({
    //     name:req.body.name,
    //     aim:req.body.phone
    // })



    // we put values in our database then we arey  using this;
    Contact.create({
        name:req.body.name,
        aim:req.body.phone
    },function(err,newContact){
        if(err){
            console.error("error to create a database");
            return;
        }
        console.log("*****",newContact);
        return res.redirect("back");
    })
   
})






app.listen(port,function(err){
        if(err){
            console.log("surver is not running at this port",err);

        }
        console.log("yup! server is running at ",port);
})

