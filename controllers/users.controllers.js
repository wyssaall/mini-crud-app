
// import users from "../data/users.js";
import { validationResult } from 'express-validator';

import User from '../model/users.model.js'

const getAllUsers = async (req,res)=>{
  let users = await User.find();
  res.json(users);
}

const getOneUser =async (req, res)=>{
  try{
    let user = await User.findById(req.params.id);
  if(!user){
    return res.status(404).json({error: "user doesnt exists"})
  }
  res.json(user);
  }catch(err){
    return res.status(400).json({error: "invalid object id"})
  }
}

const createUser =async (req, res)=>{
try{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array() });

    }

  let newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
}catch(err){
   return res.status(400).json({ errors: 'Invalid data' });
}

}


const updateUser = async (req,res)=>{
 try{
    let updatedUser = await User.findByIdAndUpdate(req.params.id, {$set :{...req.body}});
    res.json(updatedUser);
 }catch(err){
  return res.status(400).json({ error: err.messsage });
 }
}

const deleteUser = async (req, res)=>{
try{
   let deletedUser = await User.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: "User deleted successfully", user: deletedUser });
}catch(err){
  return res.status(400).json({ error: err.messsage });
}
}

export {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} ;