import express, { json } from "express";
import path from "path";
import { fileURLToPath } from "url";

import productRouter from "./routes/products.js";
import familyRouter from "./routes/family.js";
import adsRouter from "./routes/ads.js";
import financeRouter from "./routes/finances.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "../..");  // /projeto-tcc-dev

const backendPath = path.join(projectRoot, "backend");      // /projeto-tcc-dev/backend
const frontendPath = path.join(projectRoot, "frontend");    // /projeto-tcc-dev/frontend
const staticPath = path.join(frontendPath, "src");              // /projeto-tcc-dev/frontend/src
const viewsPath = path.join(frontendPath, "src/pages");     // /projeto-tcc-dev/frontend/src/pages

function createApp() {
    const app = express();
    app.set("view engine", "ejs");

    app.set("views", viewsPath);

    app.use(express.static(staticPath));

    app.use("/product", productRouter);
    app.use("/family", familyRouter);
    app.use("/ads", adsRouter);
    app.use("/finances", financeRouter);

    //Rota raiz
    app.get("/", (req, res) => {
        res.render("index");
    });

    return app;
}

export default createApp;