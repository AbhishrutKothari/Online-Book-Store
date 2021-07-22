"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.insertBook = exports.getBookById = exports.getAllBooks = exports.updateUser = exports.deleteUser = exports.logUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
var admin_model_1 = __importDefault(require("../model/admin.model"));
var book_model_1 = __importDefault(require("../model/book.model"));
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
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
    user.password = hashPassword(user.password);
    console.log(user);
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
var logUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var login, user, match, token, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                login = {
                    email: req.body.email,
                    password: req.body.password
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, admin_model_1.default.findOne({
                        email: login.email
                    })];
            case 2:
                user = _a.sent();
                console.log(user);
                if (!user) {
                    res.status(400).json({
                        type: "Not found",
                        msg: "Wrong credentials"
                    });
                }
                console.log(user);
                match = compareUserPassword(login.password, user === null || user === void 0 ? void 0 : user.password);
                console.log(user === null || user === void 0 ? void 0 : user.password);
                if (match) {
                    token = generateJwtToken({
                        user: user
                    }, "secret", {
                        expiresIn: 10000
                    });
                    if (token) {
                        res.status(200).json({
                            success: true,
                            token: token,
                            userCredentials: user
                        });
                    }
                }
                else {
                    res.status(400).json({
                        type: "Not found",
                        msg: "Incorrect credentials"
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(500).json({
                    msg: err_1,
                    type: "Something went wrong"
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.logUser = logUser;
var updateUser = function (req, res) {
    var uid = req.params.id;
    admin_model_1.default.findByIdAndUpdate({ _id: uid }, { $set: req.body }, function (err) {
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
var hashPassword = function (password) {
    return bcrypt.hashSync(password, 10);
};
var compareUserPassword = function (inputtedPassword, hashedPassword) {
    return bcrypt.compare(inputtedPassword, hashedPassword);
};
var generateJwtToken = function (payload, secret, expires) {
    return jwt.sign(payload, secret, expires);
};
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
