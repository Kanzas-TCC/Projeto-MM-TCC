import express from 'express';
import path from 'path';
const app = express();

// Fala que é pra renderizar em ejs
app.set('view engine', 'ejs');

// Define ONDE os arquivos de frontend tão e por onde o res render vai considerar como raíz
// app.set('views', '/home/user1/projeto-tcc-dev/frontend');
app.set('views', '/home/user1/projeto-tcc-dev/frontend/src');

// Serve arquivos estáticos (CSS, JS, imagens) da pasta frontend
// app.use(express.static('/home/user1/projeto-tcc-dev/frontend')); // /var/www/modamym-dev
app.use(express.static('/home/user1/projeto-tcc-dev/frontend/src'));

/* _.-=-._.-=-._.-=-._ROTAS DE BACKEND.-=-._.-=-._.-=-._ */

/* Nada por enquanto, mas todas as rotas de backend devem ter o prefixo '/api', como no exemplo abaixo */

// app.get('/api/rota', (req, res) => {
//     res.send('Hello World!'); -----> isso manda o texto 'Hello World!' pra quem fez a requisição pra essa rota.
// });

/* _.-=-._.-=-._.-=-._ROTAS DE FRONTEND.-=-._.-=-._.-=-._ */

//Isso daqui é uma rota que renderiza o index, então ao abrir dev.modamym.com.br você vai ver primeiro a página que o res.render carregar
/* ========== INDEX =========*/
// o REQ é tudo que o frontend mandou pro backend, já o RES é tudo que o backend vai mandar pro frontend
app.get('/', (req, res) => {
    // O Express vai procurar por 'index.ejs' dentro de '/var/www/modamym-dev'

    //res.render('index');  //NÃO PRECISA DA EXTENSÃO .ejs, o 'index' no começo do render aponta pra view 'var/www/modamym-dev/index.ejs'

    /* ====== se alguma rota precisar passar alguma variavel pro frontend é só colocar objeto na frente ======*/

    res.render('index.ejs');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard.ejs');
});

app.get('/ads-ml', (req, res) => {
    res.render('dashboard/ads-ml.ejs');
})

// Roda o servidor inteiro do backend na porta 3000 do servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
