import { Router } from "express"

const route = Router()

route.get("/", (req, res) => {
  res.render("ads/index")
});

route.get("/create", (req, res) => {
  res.render("ads/create")
});

route.get("/edit/:id", (req, res) => {
  const { id } = req.params
  res.render("ads/edit", { id })
});

route.post("/api/create", (req, res) => {
  // Lógica para criar um anúncio
});

route.post("/api/edit/:id", (req, res) => {
  const { id } = req.params
  // Lógica para editar um anúncio com o ID fornecido
});

route.post("/api/delete/:id", (req, res) => {
  const { id } = req.params
  // Lógica para deletar um anúncio com o ID fornecido
});

export default route