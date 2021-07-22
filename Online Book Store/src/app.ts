import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router as adminRouter } from "./router/admin.router";
import { router as cutomerRouter } from "./router/customer.router";
import { router as authRouter } from "./router/auth.router";
var cors = require('cors')

let url =
    "mongodb+srv://bookStore:C9HWxKzQ7MPpoeXT@meanstack.mylhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => console.log("Mongo DB connected successfully")
);
mongoose.connection;

let app: Application = express();

app.use(bodyParser.json());
app.use(cors())
app.use("/api/admin", adminRouter);
app.use("/api/customer", cutomerRouter);
app.use("/api/auth", authRouter);

let PORT = 9090;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
