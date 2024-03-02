import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import {exit} from "node:process"

const connectDB = async () => {
    try {
        const conntionInstance = await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST : ${conntionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED", error);
        exit(1)
    }
}

export default connectDB;