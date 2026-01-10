import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/users.routes.js";


dotenv.config();



const app = express();
const PORT = 4000;
connectDB();

app.use(express.json());
app.use('/', router);


app.listen(PORT,'localhost',()=>{
    console.log(`the server is running at port ${PORT}`);
    
})