import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    res.render("finances/index");
});

export default route;