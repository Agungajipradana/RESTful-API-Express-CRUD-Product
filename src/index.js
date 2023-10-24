const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World");
});

const productController = require("./product/product.controller");

app.use("/products", productController);

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
