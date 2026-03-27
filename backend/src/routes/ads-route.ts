import Router from "express"

const adsRouter = Router()

/* =========== ROTAS DE EXIBIÇÃO =========== */

adsRouter.get("/", (req, res) => {
  res.render("ads/index")
});

adsRouter.get("/create", (req, res) => {
  res.render("ads/create")
});

adsRouter.get("/edit/:id", (req, res) => {
  const { id } = req.params
  res.render("ads/edit", { id })
});

/* =========== ROTAS DE DADOS =========== */

adsRouter.post("/api/create", (req, res) => {
  // Lógica para criar um anúncio
});

adsRouter.post("/api/edit/:id", (req, res) => {
  const { id } = req.params
  // Lógica para editar um anúncio com o ID fornecido
});

adsRouter.post("/api/delete/:id", (req, res) => {
  const { id } = req.params
  // Lógica para deletar um anúncio com o ID fornecido
});

export default adsRouter