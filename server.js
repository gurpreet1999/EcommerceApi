require('dotenv').config()
const express = require("express");
const dbConnection = require("./databaseConfig/databaseConnection.js");
const productRoute = require("./routes/productRoutes.js");

const app = express();
//db connection
dbConnection();
//to parse json data
app.use(express.json());
// to parse url encoded data
app.use(express.urlencoded({ extended: true }));

app.use("/v1", productRoute);

app.listen(4000, () => {
  console.log("server is running fine");
});
