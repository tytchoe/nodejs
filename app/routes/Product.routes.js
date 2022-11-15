module.exports = app => {
    const product = require("../controllers/Product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product
    router.post("/", product.create);
  
    // Retrieve all product
    router.get("/", product.findAll);
  
    // Retrieve a single product with id
    router.get("/:id", product.findOne);
  
    // Update a product with id
    router.put("/:id", product.update);
  
    // Delete a product with id
    router.delete("/:id", product.delete);
  
    app.use('/api/products', router);
  };