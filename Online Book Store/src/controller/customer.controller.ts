import { Request, Response } from "express";
import CustomerModel from "../model/customer.model";
import BookModel from "../model/book.model";

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllUsers = (req: Request, res: Response) => {
    CustomerModel.find({}, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const getUserById = (req: Request, res: Response) => {
    CustomerModel.findById(req.params.id, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

const createCustomer = (req: Request, res: Response) => {
    const customer = req.body;
    customer.password = hashPassword(customer.password)
    console.log(customer)
    const newCustomer = new CustomerModel(customer);

    newCustomer.save((err: any) => {
        if (!err) {
            console.log('check')
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
        let user = await CustomerModel.findOne({
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

const updateCustomerById = (req: Request, res: Response) => {
    let cid = req.params.id
    CustomerModel.findByIdAndUpdate({_id: cid}, {$set: req.body}, (err: any) => {
        if (!err) {
            res.json({ message: "Updated successfully" });
        }
        else {
            res.json({ message: "Id does not exist" });
        }
    })
};

const deleteCustomerById = (req: Request, res: Response) => {
    CustomerModel.findById(req.params.id, (err: any, doc: any) => {
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

const getBookByAuthor = (req: Request, res: Response) => {
    BookModel.findById(req.params.author, (err: any, doc: any) => {
        if (!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
};

export { getAllUsers, getUserById, createCustomer, logUser, updateCustomerById, deleteCustomerById, getAllBooks, getBookById, getBookByAuthor };


