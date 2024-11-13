import { db } from "../database/database.js";
import modelUser from "../models/modelUser.js";

async function createUser(req, res) {
    try {
        
        const user = {
            NomeUsuario: req.body.NomeUsuario,
            emailUsuario: req.body.emailUsuario,
            senhaUsuario: req.body.senhaUsuario
        }

        if(!modelUser.sync().isPendig){
            await modelUser.sync()
        }

        if(modelUser.create(user)){
            res.status(201).send({msg:'Usuário criado com sucesso!'})
        }

    } catch (error) {
        console.error('Erro ao criar Usuário', error)
    }
}

async function editUser(req, res) {
    try {
        
        let user = modelUser.findByPk(req.params.id)

        if(user){
            user.then((dado)=>{
                dado.NomeUsuario = req.body.NomeUsuario,
                dado.emailUsuario = req.body.emailUsuario,
                dado.senhaUsuario = req.body.senhaUsuario

                if(dado.save() != null){
                    res.status(200).send({msg:`Usuario atualizado com sucesso. Usuario:${dado.IdUsuario}`})
                }
            },(error)=>{
                console.error('Erro ao atualizar Usuario', error)
            })
        }

    } catch (error) {
        console.error('Erro ao criar Usuário', error)
    }
}

async function showAllUser(req, res) {
    try {
        
        let user = modelUser.findAll()

        if(user){
            user.then((dados)=>{
                res.status(200).send({msg:dados})
            },(error)=>{
                onsole.error('Erro ao mostrar Usuários', error)
            })
        }

    } catch (error) {
        console.error('Erro ao mostrar Usuários', error)
    }
}

async function showUser(req, res) {
    try {

        let user = modelUser.findByPk(req.params.id)

        if(user){
            user.then((dados)=>{
                res.status(200).send({msg:dados})
            },(error)=>{
                onsole.error('Erro ao mostrar Usuário', error)
            })
        }

    } catch (error) {
        console.error('Erro ao mostrar Usuário', error)
    }
}


async function deleteUser(req, res) {
    try {
        
        let user = modelUser.findByPk(req.params.id)

        if(user){
            user.then((dado)=>{
                if(dado.destroy()){
                    res.status(200).send({msg:`Usuário ${dado.NomeUsuario} deletado com sucesso!`})
                }
            },(error)=>{
                onsole.error('Erro ao deletar Usuário', error)
            })
        }

    } catch (error) {
        console.error('Erro ao Deletar Usuário', error)
    }
}

export default {createUser, editUser, showUser, deleteUser, showAllUser}