import express from "express"
import { UserRouter } from "./routesUser.js"

export const expressRouter = express.Router()

const routerUser = UserRouter

expressRouter.use("/User", routerUser)