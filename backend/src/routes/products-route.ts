import Router from "express";

const productsRouter = Router();

/* =========== ROTAS DE EXIBIÇÃO =========== */

productsRouter.get("/", (req, res) => {
  res.render("products/index.ejs");
});

productsRouter.get("/create", (req, res) => {
  res.render("products/create.ejs");
});

productsRouter.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("products/edit.ejs", { id });
});

/* =========== ROTAS DE DADOS =========== */

productsRouter.post("/api/create", (req, res) => {
  // Lógica para criar um produto
});

productsRouter.post("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar um produto com o ID fornecido
});

productsRouter.post("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar um produto com o ID fornecido
});

export default productsRouter;