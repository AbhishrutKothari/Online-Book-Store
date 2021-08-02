import express, { Router } from "express";
import * as bookController from "../controller/book.controller";

export let router: Router = express();

router.get("/getBooks", bookController.getAllBooks);
router.get("/getBook/:id", bookController.getBookById);
router.post("/insertBook", bookController.insertBook);
router.put("/updateBook/:id", bookController.updateBook);
router.delete("/deleteBook/:id", bookController.deleteBook);