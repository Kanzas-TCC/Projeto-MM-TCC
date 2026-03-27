import { Router } from "express";

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


route.post("/api/create", (req, res) => {
  // Lógica para criar um produto
});

route.post("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar um produto com o ID fornecido
});

route.post("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar um produto com o ID fornecido
});

export default route;