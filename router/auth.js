import { Router } from "express"
import read from "../controllers/users/read.js"


let authRouter = Router()
authRouter.get('/',read)

export default authRouter