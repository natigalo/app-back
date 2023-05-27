import { Router} from "express"
import authorsRouter from "./authors.js"
import mangasRouter from "./mangas.js"
import authRouter from "./auth.js"
import chaptersRouter from "./chapters.js"

let indexRouter = Router()

indexRouter.use('/authors', authorsRouter )
indexRouter.use('/mangas',mangasRouter)
indexRouter.use('/auth',authRouter)
indexRouter.use('/chapters',chaptersRouter)
export default indexRouter