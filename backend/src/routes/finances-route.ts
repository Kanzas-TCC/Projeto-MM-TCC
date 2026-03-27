import Router from "express";

const financesRouter = Router();

/* =========== ROTAS DE EXIBIÇÃO =========== */

financesRouter.get("/dashboard", (req, res) => {
    res.render("finances/dashboard.ejs");
});

export default financesRouter;