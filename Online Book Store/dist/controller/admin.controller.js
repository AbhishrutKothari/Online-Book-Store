"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.insertBook = exports.getBookById = exports.getAllBooks = exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
var admin_model_1 = __importDefault(require("../model/admin.model"));
var book_model_1 = __importDefault(require("../model/book.model"));
var getAllUsers = function (req, res) {
    admin_model_1.default.find({}, function (err, doc) {
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
    admin_model_1.default.findById(req.params.id, function (err, doc) {
        if (!err) {
            res.json(doc);
        }
        else {
            res.json(err);
        }
    });
};
exports.getUserById = getUserById;
var createUser = function (req, res) {
    var user = req.body;
    var newUser = new admin_model_1.default(user);
    newUser.save(function (err) {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        }
        else {
            res.json(err);
        }
    });
};
exports.createUser = createUser;
var updateUser = function (req, res) {
    admin_model_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (!err) {
            res.json({ message: "Updated successfully" });
        }
        else {
            res.json({ message: "ID does not exist" });
        }
    });
};
exports.updateUser = updateUser;
var deleteUser = function (req, res) {
    admin_model_1.default.findById(req.params.id, function (err, doc) {
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
exports.deleteUser = deleteUser;
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
var insertBook = function (req, res) {
    var book = req.body;
    var newBook = new book_model_1.default(book);
    newBook.save(function (err) {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        }
        else {
            res.json(err);
        }
    });
};
exports.insertBook = insertBook;
var updateBook = function (req, res) {
    book_model_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (!err) {
            res.json({ message: "Updated successfully" });
        }
        else {
            res.json({ message: "ID does not exist" });
        }
    });
};
exports.updateBook = updateBook;
var deleteBook = function (req, res) {
    book_model_1.default.findById(req.params.id, function (err, doc) {
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
exports.deleteBook = deleteBook;
