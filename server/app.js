// middleware

const express = require("express");
const Sequelize = require("sequelize");
// cors for restricting page from making requests to domain other than served domain
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "mysql",
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
}).catch((error) => {
    console.error("Unable to connect to the database:", error);
});

// MODELS 🐸
const User = require("./models/User").default(sequelize, Sequelize); // review

// ROUTES 🐸
app.use('/api/users', require('./routes/users')(User)); // definitely going to need review

module.exports = app;