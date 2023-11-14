import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routers/index.js'
dotenv.config()
const port = 8989


const app = express()
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use("/", router)

mongoose.connect('mongodb+srv://testmindx1:XgruVCG8JzLQlIG8@testmindx.5onevcf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connect MongoDB Success'));
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
