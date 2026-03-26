import Router from "express"

const auth-router = Router();


auth-router.get("/sign-up", (req, res) => {
    res.render("pages/auth/sign-up.ejs");
});

auth-router.get("/login", (req, res) => {
    res.render("pages/auth/login.ejs");
});

auth-router.get("/forgot-password", (req, res) => {
    res.render("pages/auth/forgot-password.ejs");
});

export default auth-router;