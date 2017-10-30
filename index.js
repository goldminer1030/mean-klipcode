// index.js
/* jshint -W100 */
var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
// var methodOverride = require("method-override");
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
// app.use(methodOverride("_method"));

// Routes
app.use("/", require("./routes/home"));
app.use("/contacts", require("./routes/contacts"));

// my module test
var m = require("./my-module");
﻿console.log(m.name);
console.log(m.age);
﻿﻿m.aboutMe();

app.listen(3000, function(){
 console.log('Server On!');
});
