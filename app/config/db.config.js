module.exports = {
    HOST: "192.168.1.19",
    USER: "postgres",
    PASSWORD: "javi2021",
    DB: "Training",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };