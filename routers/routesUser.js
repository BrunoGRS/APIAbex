import express from "express"
import userController from "../controllers/userController.js"

export const UserRouter = express.Router()

UserRouter.route("/create").post((req,res)=> userController.createUser(req,res))
UserRouter.route("/edit/:id").put((req,res)=> userController.editUser(req,res))
UserRouter.route("/show").get((req,res)=> userController.showAllUser(req,res))
UserRouter.route("/show/:id").get((req,res)=> userController.showUser(req,res))
UserRouter.route("/delete/:id").delete((req,res)=> userController.deleteUser(req,res))

