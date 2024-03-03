// require('dotenv').config({path :'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})



connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR :", error);
            throw error;
        })
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is listening on ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION FALIED !!!", err);
    })





/*
not good practice

import { express } from "express";
const app = express();

// making Efie
(async () => {
    try {
        await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR :",error);
            throw error; 
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App listening on ${process.env.PORT}`);
        })

    } catch (err) {
        console.error("Error", err);
        throw err
    }
})()        
*/