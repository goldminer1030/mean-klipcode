// index.js
/* jshint -W100 */
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser"); // 1
var app = express();

// DB setting ...
mongoose.connect(process.env.MONGO_DB, { useMongoClient: true });
var db = mongoose.connection;

db.once("open", function(){
 console.log("DB connected");
});

db.on("error", function(err){
 console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// DB schema
var contactSchema = mongoose.Schema({
 name:{type:String, required:true, unique:true},
 email:{type:String},
 phone:{type:String}
});
var Contact = mongoose.model("contact", contactSchema);

// Routes
// Home
app.get("/", function(req, res){
 res.redirect("/contacts");
});
// Contacts - Index
app.get("/contacts", function(req, res){
   Contact.find({}, function(err, contacts){
    if(err) return res.json(err);
    res.render("contacts/index", {contacts:contacts});
  });
});
// Contacts - New
app.get("/contacts/new", function(req, res){
 res.render("contacts/new");
});
// Contacts - create
app.post("/contacts", function(req, res){
 Contact.create(req.body, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/contacts");
 });
});

// my module test
var m = require("./my-module");
﻿console.log(m.name);
console.log(m.age);
﻿﻿m.aboutMe();

app.listen(3000, function(){
 console.log('Server On!');
});
