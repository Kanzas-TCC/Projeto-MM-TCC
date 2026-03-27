import { Router } from "express";
import { deleteProduct, editProduct, postProduct } from "../controllers/products.js";

const route = Router();

route.get("/", (req, res) => {
  res.render("products/index");
});

route.get("/create", (req, res) => {
  res.render("products/create");
});

route.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("products/edit", { id });
});


route.post("/api/create", postProduct);

route.post("/api/edit/:id", editProduct);

route.post("/api/delete/:id", deleteProduct);

export default route;