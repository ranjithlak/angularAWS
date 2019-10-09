module.exports = function(app) {
  const Customer = require("../controller/clients.controller.js");

  // Create a new Customer
  app.post("/api/customers", Customer.create);

  // Retrieve all Customer
  app.get("/api/customers", Customer.findAll);
};
