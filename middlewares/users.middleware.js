import {body} from "express-validator"


const userMiddleware = ()=>{
    return [
        body('name').notEmpty()
    ]
}

export default userMiddleware