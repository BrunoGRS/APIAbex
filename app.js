import express from "express"
import cors from "cors"

const app = express()

//MIDLIEWARES
app.use(cors()) //permite a utilização do cors para segurança
app.use(express.json()) //permite a comunicação via json

// Config Rotas

app.use("/api")

app.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000>');
  })