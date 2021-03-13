let Incident = require('./family.model');
const express = require('express');
const router = require('express').Router();
const app = express();
const cors = require('cors');
const bodyparser=require('body-parser')
const mongoose=require("mongoose");
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.static("public"));
app.use(cors({origin: true, credentials: true}));


app.get("/",(req, res) => {
    Incident.find({},function(err,post){
        if(err){
            console.log(err)
        }
        else
        res.json(post)
         })
        })

   

    app.post("/",(req, res) => {

        const date = req.body.date;
        const Time=req.body.Time;
        const Guardname=req.body.Guardname;
        const Organisation=req.body.Organisation;
        const SiteName=req.body.SiteName;
        const incident=req.body.Incident;
        const Actions=req.body.Actions;
     
        const newUser = new Incident({date,Time,Guardname,Organisation,SiteName,incident,Actions});
       
      
        newUser.save()
          .then(() => res.json('User added!'))
          .catch(err => res.status(400).json('Error: ' + err));
      
      });
        
      

   
app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
});