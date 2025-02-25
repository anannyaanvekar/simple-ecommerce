const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

app.get("/products", (req, res) => res.json(products));

app.listen(5000, () => console.log("Backend running on port 5000"));
