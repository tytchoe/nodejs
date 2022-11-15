const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req,res)=> {
    if (!req.body.Name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    const product = {
        Name: req.body.Name,
        Color: req.body.Color,
        Price: req.body.Price
    }

    Product.create(product)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
};
exports.findAll = (req,res)=>{
  
    Product.findAll()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Product."
          });
    });
};
exports.findOne = (req,res)=>{
    const id = req.params.id;

    Product.findByPk(id)
    .then(data=>{
        if(data) {
            res.send(data)
        }else{
            res.status(404).send({
                message:"Can not find"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:
                err.message || "some error"
        })
    })
};
exports.update = (req,res)=>{
    const id = req.params.id;
    
    Product.update(req.body, {
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
              message: "Product was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Product with id=${id}`
            });
          }
    })
    .catch(err=>{
        res.status(500).send({
            message:
                res.message || "some error"
        })
    })
};
exports.delete = (req,res)=>{
    const id = req.params.id;

    Product.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
              message: "Product was deleted successfully."
            });
          } else {
            res.send({
              message: `Cannot delete Product with id=${id}`
            });
          }
    })
    .catch(err=>{
        res.status(500).send({
            message:
                res.message || "some error"
        })
    })
};
