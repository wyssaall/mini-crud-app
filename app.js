import express from "express";
import {body, validationResult} from "express-validator"
import users from "./data/users.js";


const app = express();
const PORT = 4000;

app.use(express.json());

//get all useres

app.get('/api/users',(req,res)=>{
  res.json(users);
})

//get one user

app.get('/api/users/:id',(req, res)=>{
  let id = parseInt(req.params.id);
  let user = users.find(user => user.id === id);

  if(!user){
    return res.status(404).json({error: "user doesnt exists"})
  }
  res.json(user);
})

//create a user
app.post('/api/users',body('name').notEmpty() ,(req, res)=>{
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

})

//update a user
app.put('/api/users/:id',(req,res)=>{
  let id = parseInt(req.params.id);
  let user = users.find(user => user.id === id);
 
  user = {
    ...user, 
    ...req.body
  }
 res.json(user);
})

//delete user

app.delete('/api/users/:id',(req, res)=>{
  let id = parseInt(req.params.id);
  users = users.filter((user)=> user.id !== id);
  res.json(users);
})

app.listen(PORT,'localhost',()=>{
    console.log(`the server is running at port ${PORT}`);
    
})