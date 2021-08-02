"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var admin_router_1 = require("./router/admin.router");
var customer_router_1 = require("./router/customer.router");
<<<<<<< HEAD
var auth_router_1 = require("./router/auth.router");
=======
var book_router_1 = require("./router/book.router");
>>>>>>> main
var cors = require('cors');
var url = "mongodb+srv://bookStore:C9HWxKzQ7MPpoeXT@meanstack.mylhg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function () { return console.log("Mongo DB connected successfully"); });
mongoose_1.default.connection;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors());
app.use("/api/admin", admin_router_1.router);
app.use("/api/customer", customer_router_1.router);
<<<<<<< HEAD
app.use("/api/auth", auth_router_1.router);
=======
app.use("/api/book", book_router_1.router);
>>>>>>> main
var PORT = 9090;
app.listen(PORT, function () { return console.log("Server listening on port " + PORT); });
