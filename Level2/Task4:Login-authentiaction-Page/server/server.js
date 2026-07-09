import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']); 
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js';

const app=express();
const port= process.env.PORT || 4000
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const allowedOrigins=['http://localhost:5173'];
app.use(cors({origin: allowedOrigins, credentials: true}))


//API Initialization
app.get('/', (req,res)=> res.send("Api working"))
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.listen(port, ()=>console.log(`Server started on PORT${port}`));
