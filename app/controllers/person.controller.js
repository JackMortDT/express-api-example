const db = require("../models");
const Person = db.person;

// Retrieve all People from the database.
exports.findAll = (req, res) => {
  Person.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.status || "Some error occurred while retrieving people."
      });
    });
};

// Create and Save a new Person
exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const person = new Person({
    age: req.body.age,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  person
    .save(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person."
      });
    });
};