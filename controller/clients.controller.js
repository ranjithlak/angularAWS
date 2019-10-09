const db = require("../config/db.config.js");
const Customer = db.customers;

exports.create = (req, res) => {
  // Save to MySQL database
  Customer.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }).then(customer => {
    // Send created customer to client
    console.log(customer.firstName);
    res.send(customer);
  });
};

exports.findAll = (req, res) => {
  Customer.findAll().then(customer => {
    // Send all customers to Client
    res.json(customer);
  });
};
