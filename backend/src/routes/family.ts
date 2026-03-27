import { Router } from "express";

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

route.post("/api/create", (req, res) => {
  // Lógica para criar uma família
});

route.post("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar uma família com o ID fornecido
});

route.post("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar uma família com o ID fornecido
});

export default route;