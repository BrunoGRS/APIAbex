import { Sequelize } from "sequelize";
import { db } from "../database/database.js";

export default db.define("usuario", {
    IdUsuario: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    NomeUsuario:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    emailUsuario:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    senhaUsuario:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    timestamps: false
})