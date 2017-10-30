// routes/contacts.js

var express = require("express");
var router = express.Router();
var contact = require("../models/contact");

// Index
router.get("/", function(req, res){
 contact.find({}, function(err, contacts){
  if(err) return res.json(err);
  res.render("contacts/index", {contacts:contacts});
 });
});

// New
router.get("/new", function(req, res){
 res.render("contacts/new");
});

// create
router.post("/", function(req, res){
 contact.create(req.body, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/contacts");
 });
});

// show
router.get("/:id", function(req, res){
 contact.findOne({_id:req.params.id}, function(err, contact){
  if(err) return res.json(err);
  res.render("contacts/show", {contact:contact});
 });
});

// edit
router.get("/:id/edit", function(req, res){
 contact.findOne({_id:req.params.id}, function(err, contact){
  if(err) return res.json(err);
  res.render("contacts/edit", {contact:contact});
 });
});

// update
router.put("/:id", function(req, res){
 contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
  if(err) return res.json(err);
  res.redirect("/contacts/"+req.params.id);
 });
});

// destroy
router.delete("/:id", function(req, res){
 contact.remove({_id:req.params.id}, function(err){
  if(err) return res.json(err);
  res.redirect("/contacts");
 });
});

module.exports = router;
