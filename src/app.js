import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//  USE method is used to parsers

/* By properly configuring CORS headers in the backend, you can control and secure cross-origin requests, allowing or denying access based on your application's requirements and security policies.  */

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// data can comes from url cookie json form etc
app.use(express.json({ limit: "16kb" }));
// url configration while taking data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// static configuration for public assets
app.use(express.static("public"));
app.use(cookieParser());

export { app };
