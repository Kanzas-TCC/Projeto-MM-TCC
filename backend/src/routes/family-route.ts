import Router from "express";

const familyRouter = Router();

/* =========== ROTAS DE EXIBIÇÃO =========== */

familyRouter.get("/", (req, res) => {
  res.render("family/index");
});

familyRouter.get("/create", (req, res) => {
  res.render("family/create");
});

familyRouter.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("family/edit", { id });
});

/* =========== ROTAS DE DADOS =========== */

familyRouter.post("/api/create", (req, res) => {
  // Lógica para criar uma família
});

familyRouter.post("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar uma família com o ID fornecido
});

familyRouter.post("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar uma família com o ID fornecido
});

export default familyRouter;