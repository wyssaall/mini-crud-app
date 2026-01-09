import express from "express";

const app = express();
const PORT = 4000;






app.listen(PORT,'localhost',()=>{
    console.log(`the server is running at port ${PORT}`);
    
})