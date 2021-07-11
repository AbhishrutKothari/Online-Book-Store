import { Request, Response } from "express";
import CustomerModel from "../model/customer.model";
import BookModel from "../model/book.model";

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
    const newCustomer = new CustomerModel(customer);

    newCustomer.save((err: any) => {
        if (!err) {
            res.json({ message: "Inserted successfully" });
        } else {
            res.json(err);
        }
    });
};

const updateCustomerById = (req: Request, res: Response) => {
    CustomerModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err: any) => {
        if (!err) {
            res.json({ message: "Updated successfully" });
        } else {
            res.json({ message: "ID does not exist" });
        }
    });
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

export { getUserById, createCustomer, updateCustomerById, deleteCustomerById, getAllBooks, getBookById, getBookByAuthor};


