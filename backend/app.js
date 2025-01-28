const express = require("express");
const session = require("express-session");
const { keycloak, memoryStore } = require("./config/keycloak-config");
const sequelize = require("./config/db-config");
const User = require("./models/User");
const Transaction = require("./models/Transaction");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  session({
    secret: "some-secret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

app.use(keycloak.middleware());

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Unable to connect to the database:", err));

sequelize
  .sync({ force: false }) // Set force: true to reset tables
  .then(() => console.log("Database synchronized!"))
  .catch((err) => console.error("Error syncing database:", err));

app.use("/api/users", keycloak.protect(), userRoutes);

module.exports = app;
