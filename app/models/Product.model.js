const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    Name: {
      type: DataTypes.STRING
    },
    Color: {
      type: DataTypes.STRING
    },
    Price: {
      type: DataTypes.DECIMAL(10,0)
    }
  });

  return Product;
};