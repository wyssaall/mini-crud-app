import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/users.controllers.js";
import express from "express"
import userMiddleware from "../middlewares/users.middleware.js";
const router = express.Router();


//get all useres

router.get('/api/users', getAllUsers)

//get one user

router.get('/api/users/:id', getOneUser)

//create a user
router.post('/api/users', userMiddleware , createUser)

//update a user
router.put('/api/users/:id', updateUser)

//delete user

router.delete('/api/users/:id', deleteUser)

export default router;