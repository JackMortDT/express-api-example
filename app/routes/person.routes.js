module.exports = app => {
  const person = require("../controllers/person.controller.js");

  var router = require("express").Router();

  // Retrieve all People
  router.get("/", person.findAll);

  // Create new person
  router.post("/", person.create);
  
  app.use("/person", router);
}