import express from "express";
import cors from "cors";
import { main } from "./database/database.js";
import { expressRouter } from "./routers/router.js";

const app = express();

app.use(cors()); // Permite a utilização do CORS para segurança
app.use(express.json()); // Permite a comunicação via JSON

// Conexão do banco de dados
const connectionMySql = main();

// Config Rotas
const routerUsr = expressRouter

app.use("/api", routerUsr)

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000>');
});
