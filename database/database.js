import { Sequelize } from "sequelize"; //type module
import dotenv from "dotenv/config.js"; // importar o dotenv para localizar as variáveis de ambiente

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

export const db = new Sequelize(dbName,dbUser,dbPassword,{
            host:dbHost,
            dialect: "mysql",
            port:3306,
            define:{
                freezeTableName: true,
            }
        })

        
export async function main(){
    try{
        await db.authenticate()
        console.log("Conexão Estabelecida!")
    } catch (error) {
        console.log(dbHost)
        console.error("Conexão não concluída!", error)
    }
}