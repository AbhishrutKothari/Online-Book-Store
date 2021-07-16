"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByAuthor = exports.getBookById = exports.getAllBooks = exports.deleteCustomerById = exports.updateCustomerById = exports.createCustomer = exports.getUserById = exports.getAllUsers = void 0;
var customer_model_1 = __importDefault(require("../model/customer.model"));
var book_model_1 = __importDefault(require("../model/book.model"));
var getAllUsers = function (req, res) {
    customer_model_1.default.find({}, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getAllUsers = getAllUsers;
var getUserById = function (req, res) {
    customer_model_1.default.findById(req.params.id, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getUserById = getUserById;
var createCustomer = function (req, res) {
    var customer = req.body;
    var newCustomer = new customer_model_1.default(customer);
    newCustomer.save(function (err) {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        }
        else {
            res.json(err);
        }
    });
};
exports.createCustomer = createCustomer;
var updateCustomerById = function (req, res) {
    var cid = req.params.id;
    customer_model_1.default.findByIdAndUpdate({ _id: cid }, { $set: req.body }, function (err) {
        if (!err) {
            res.json({ message: "Updated successfully" });
        }
        else {
            res.json({ message: "Id does not exist" });
        }
    });
};
exports.updateCustomerById = updateCustomerById;
var deleteCustomerById = function (req, res) {
    customer_model_1.default.findById(req.params.id, function (err, doc) {
        if (!err) {
            if (doc) {
                doc.remove();
                res.json({ message: "Deleted successfully" });
            }
            else {
                res.json({ message: "ID does not exist" });
            }
        }
        else {
            res.json(err);
        }
    });
};
exports.deleteCustomerById = deleteCustomerById;
var getAllBooks = function (req, res) {
    book_model_1.default.find({}, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getAllBooks = getAllBooks;
var getBookById = function (req, res) {
    book_model_1.default.findById(req.params.id, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getBookById = getBookById;
var getBookByAuthor = function (req, res) {
    book_model_1.default.findById(req.params.author, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getBookByAuthor = getBookByAuthor;
