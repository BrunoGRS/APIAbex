import { Sequelize } from "sequelize"; //type module


export const db = new Sequelize('idchild','root','',{
            host:'localhost',
            dialect: "mysql",
            port:3306
        })

        
export async function main(){
    try{
        await db.authenticate()
        console.log("Conexão Estabelecida!")
    } catch (error) {
        console.error("Conexão não concluída!", error)
    }
}