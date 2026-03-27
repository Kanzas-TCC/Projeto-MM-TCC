import { Router } from "express";
import { deleteFamily, editFamily, postFamily } from "../controllers/family.js";

const route = Router();

route.get("/", (req, res) => {
  res.render("family/index");
});

route.get("/create", (req, res) => {
  res.render("family/create");
});

route.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("family/edit", { id });
});

route.post("/api/create", postFamily);

route.post("/api/edit/:id", editFamily);

route.post("/api/delete/:id", deleteFamily);

export default route;