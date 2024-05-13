// require('dotenv').config({path :'./env'})

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: './env',
});

connectDB();

/*
import express from "express";
const app = express();
 
iffi (Immediately-Invoked Function Expression) function while establishing a Mongoose database connection in Node.js 

(async () => {
    try {
      mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERROR", error);
        throw error;
      });
  
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`);
      });
    } catch (e) {
      console.error("Error", e);
      throw err;
    }
  })();

*/
