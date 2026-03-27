import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import productsRouter from "./routes/products-route";
import familyRouter from "./routes/family-route";
import adsRouter from "./routes/ads-route"
import financeRouter from "./routes/finances-route"

const app = express();

// Fala que é pra renderizar em ejs
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.resolve(__dirname, "../../frontend/src/pages");

// Define ONDE os arquivos de frontend estão e por onde o res render vai considerar como raíz
// app.set("views", "/home/user1/projeto-tcc-dev/frontend");
app.set("views", publicPath);

// Serve arquivos estáticos (CSS, JS, imagens) da pasta frontend
// app.use(express.static("/home/user1/projeto-tcc-dev/frontend")); // /var/www/modamym-dev
app.use(express.static(publicPath));

/* _.-=-._.-=-._.-=-._ROTAS.-=-._.-=-._.-=-._ */

//Isso daqui é uma rota que renderiza o index, então ao abrir dev.modamym.com.br você vai ver primeiro a página que o res.render carregar
/* ========== INDEX =========*/
// o REQ é tudo que o frontend mandou pro backend, já o RES é tudo que o backend vai mandar pro frontend
app.get("/", (req, res) => {
    // O Express vai procurar por "index.ejs" dentro de "/var/www/modamym-dev"

    //res.render("index");  //NÃO PRECISA DA EXTENSÃO .ejs, o "index" no começo do render aponta pra view "var/www/modamym-dev/index.ejs"

    /* ====== se alguma rota precisar passar alguma variavel pro frontend é só colocar objeto na frente ======*/

    res.render("index");
});

/* ========== Produtos ==========*/

app.use("/products", productsRouter);

/* ========== Família ==========*/

app.use("/family", familyRouter);

/* ========== Anúncios ==========*/

app.use("/ads", adsRouter);

/* ========== Financeiro ==========*/

app.use("/finances", financeRouter);

// Roda o servidor inteiro do backend na porta 3000 do servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
