import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
import dotenv from "dotenv";

dotenv.config();


const PORT = process.env.PORT || 5000;
const URL=process.env.DATABASE_URL
const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

mongoose.connect(URL,{})
    .then(() => app.listen(PORT, () => { console.log(`server is running on the ${PORT}`) }))
    .catch((err)=>console.log(err.message))