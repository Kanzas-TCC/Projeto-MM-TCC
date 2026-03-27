import { Router } from "express"
import { postAds, editAds, deleteAds } from "../controllers/ads.js"

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

route.post("/api/create", postAds);

route.post("/api/edit/:id", editAds);

route.post("/api/delete/:id", deleteAds);

export default route