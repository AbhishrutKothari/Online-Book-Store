import { Request, Response } from "express";
import AdminModel from "../model/admin.model";
import BookModel from "../model/book.model";

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllUsers = (req: Request, res: Response) => {
    AdminModel.find({}, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const getUserById = (req: Request, res: Response) => {
    AdminModel.findById(req.params.id, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const createUser = (req: Request, res: Response) => {
    const user = req.body;
    user.password = hashPassword(user.password)
    console.log(user)
    const newUser = new AdminModel(user);

    newUser.save((err: any) => {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        } else {
            res.json(err);
        }
    });
};

const logUser = async (req: Request, res: Response) => {
    const login = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        let user = await AdminModel.findOne({
            email: login.email
        })
        console.log(user)
        if (!user) {
            res.status(400).json({
                type: "Not found",
                msg: "Wrong credentials"
            })
        }
        console.log(user)
        let match = compareUserPassword(login.password, user?.password)
        console.log(user?.password)
        if (match) {
            let token = generateJwtToken({
                user
            }, "secret" , {
                expiresIn: 10000
            })
            if (token) {
                res.status(200).json({
                    success: true,
                    token: token,
                    userCredentials: user
                })
            }
        }
        else {
            res.status(400).json({
                type: "Not found",
                msg: "Incorrect credentials"
            })
        }
    }
    catch(err) {
        res.status(500).json({
            msg: err,
            type: "Something went wrong"
        })
    }
}

const updateUser = (req: Request, res: Response) => {
    let uid = req.params.id
    AdminModel.findByIdAndUpdate({_id: uid}, {$set: req.body}, (err: any) => {
        if (!err) {
            res.json({ message: "Updated successfully" });
        } else {
            res.json({ message: "ID does not exist" });
        }
    });
};

const deleteUser = (req: Request, res: Response) => {
    AdminModel.findById(req.params.id, (err: any, doc: any) => {
        if (!err) {
            if (doc) {
                doc.remove();
                res.json({ message: "Deleted successfully" });
            } else {
                res.json({ message: "ID does not exist" });
            }
        } else {
            res.json(err);
        }
    });
};

let hashPassword =  (password:any) => {             // this function is use to convert our password in encript format. 
    return bcrypt.hashSync(password, 10);          
}
let compareUserPassword = (inputtedPassword:any, hashedPassword:any) => {
   return bcrypt.compare(inputtedPassword, hashedPassword)
}
let generateJwtToken = (payload:any, secret:any, expires:any) => {
   return jwt.sign(payload, secret, expires)
}

const getAllBooks = (req: Request, res: Response) => {
    BookModel.find({}, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const getBookById = (req: Request, res: Response) => {
    BookModel.findById(req.params.id, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const insertBook= (req: Request, res: Response) => {
    const book = req.body;
    const newBook = new BookModel(book);

    newBook.save((err: any) => {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        } else {
            res.json(err);
        }
    });
};

const updateBook = (req: Request, res: Response) => {
    BookModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err: any) => {
        if (!err) {
            res.json({ message: "Updated successfully" });
        } else {
            res.json({ message: "ID does not exist" });
        }
    });
};

const deleteBook = (req: Request, res: Response) => {
    BookModel.findById(req.params.id, (err: any, doc: any) => {
        if (!err) {
            if (doc) {
                doc.remove();
                res.json({ message: "Deleted successfully" });
            } else {
                res.json({ message: "ID does not exist" });
            }
        } else {
            res.json(err);
        }
    });
};

export { getAllUsers, getUserById, createUser, logUser, deleteUser, updateUser, getAllBooks, getBookById, insertBook, updateBook, deleteBook };