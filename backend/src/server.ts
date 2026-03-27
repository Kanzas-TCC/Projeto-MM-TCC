import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import productsRouter from "./routes/products-route.js";
// import familyRouter from "./routes/family-route.js";
// import adsRouter from "./routes/ads-route.js";
// import financeRouter from "./routes/finances-route.js";

const app = express();

// Fala que é pra renderizar em ejs
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "../..");  // /projeto-tcc-dev

const backendPath = path.join(projectRoot, "backend");      // /projeto-tcc-dev/backend
const frontendPath = path.join(projectRoot, "frontend");    // /projeto-tcc-dev/frontend
const staticPath = path.join(frontendPath, "src");              // /projeto-tcc-dev/frontend/src
const viewsPath = path.join(frontendPath, "src/pages");     // /projeto-tcc-dev/frontend/src/pages

// Define ONDE os arquivos de frontend estão e por onde o res render vai considerar como raíz
// app.set("views", "/home/user1/projeto-tcc-dev/frontend/src/pages");
app.set("views", viewsPath);

// Serve arquivos estáticos (CSS, JS, imagens) da pasta frontend
// app.use(express.static("/home/user1/projeto-tcc-dev/frontend/src/pages")); // /var/www/modamym-dev
app.use(express.static(staticPath)); 

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

// app.use("/products", productsRouter);

/* =========== ROTAS DE EXIBIÇÃO =========== */

app.get("/products/", (req, res) => {
  res.render("products/index");
});

app.get("/products/create", (req, res) => {
  res.render("products/create");
});

app.get("/products/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("products/edit", { id });
});

/* =========== ROTAS DE DADOS =========== */

app.post("/products/api/create", (req, res) => {
  // Lógica para criar um produto
});

app.post("/products/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar um produto com o ID fornecido
});

app.post("/products/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar um produto com o ID fornecido
});

/* ========== Família ==========*/

// app.use("/family", familyRouter);

/* =========== ROTAS DE EXIBIÇÃO =========== */

app.get("/family/", (req, res) => {
  res.render("family/index");
});

app.get("/family/create", (req, res) => {
  res.render("family/create");
});

app.get("/family/edit/:id", (req, res) => {
  const { id } = req.params;
  res.render("family/edit", { id });
});

/* =========== ROTAS DE DADOS =========== */

app.post("/family/api/create", (req, res) => {
  // Lógica para criar uma família
});

app.post("/family/api/edit/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para editar uma família com o ID fornecido
});

app.post("/family/api/delete/:id", (req, res) => {
  const { id } = req.params;
  // Lógica para deletar uma família com o ID fornecido
});

/* ========== Anúncios ==========*/

// app.use("/ads", adsRouter);

/* =========== ROTAS DE EXIBIÇÃO =========== */

app.get("/ads/", (req, res) => {
  res.render("ads/index")
});

app.get("/ads/create", (req, res) => {
  res.render("ads/create")
});

app.get("/ads/edit/:id", (req, res) => {
  const { id } = req.params
  res.render("ads/edit", { id })
});

/* =========== ROTAS DE DADOS =========== */

app.post("/ads/api/create", (req, res) => {
  // Lógica para criar um anúncio
});

app.post("/ads/api/edit/:id", (req, res) => {
  const { id } = req.params
  // Lógica para editar um anúncio com o ID fornecido
});

app.post("/ads/api/delete/:id", (req, res) => {
  const { id } = req.params
  // Lógica para deletar um anúncio com o ID fornecido
});

/* ========== Financeiro ==========*/

// app.use("/finances", financeRouter);

app.get("/finances/dashboard", (req, res) => {
    res.render("finances/index");
});

// Roda o servidor inteiro do backend na porta 3000 do servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
