
import users from "../data/users.js";
import { validationResult } from 'express-validator';


const getAllUsers = (req,res)=>{
  res.json(users);
}

const getOneUser =(req, res)=>{
  let id = parseInt(req.params.id);
  let user = users.find(user => user.id === id);

  if(!user){
    return res.status(404).json({error: "user doesnt exists"})
  }
  res.json(user);
}

const createUser = (req, res)=>{
  let errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array() });

    }

  let user = 
  {
    id : users.length + 1,
    ...req.body
  }
   users.push(user);
   res.status(201).json(users);

}


const updateUser = (req,res)=>{
  let id = parseInt(req.params.id);
  let user = users.find(user => user.id === id);
 
  user = {
    ...user, 
    ...req.body
  }
 res.json(user);
}

const deleteUser = (req, res)=>{
  let id = parseInt(req.params.id);
  users = users.filter((user)=> user.id !== id);
  res.status(200).json(users);
}

export {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} ;