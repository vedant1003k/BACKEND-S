// require('dotenv').config({path :'./env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });

  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED: ", err);
  });

/*

 
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
