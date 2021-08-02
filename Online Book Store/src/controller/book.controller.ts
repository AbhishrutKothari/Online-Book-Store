import { Request, Response } from "express";
import BookModel from "../model/book.model";

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

const insertBook = (req: Request, res: Response) => {
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

export {getAllBooks, getBookById, insertBook, updateBook, deleteBook };