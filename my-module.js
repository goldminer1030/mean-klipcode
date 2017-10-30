// my-module.js

var myModule = {
  name: "Gold",
  age: "29",
  aboutMe: function(){
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
};

module.exports = myModule;
