import express, { Router } from "express";
import * as adminController from "../controller/admin.controller";


export let router: Router = express();

router.get("/", adminController.getAllUsers);
router.get("/:id", adminController.getUserById);
router.post("/create", adminController.createUser);
router.put("/update/:id", adminController.updateUser);
router.delete("/delete/:id", adminController.deleteUser);

router.get("/getBooks", adminController.getAllBooks);
router.get("/getBook/:id", adminController.getBookById);
router.post("/insertBook", adminController.insertBook);
router.put("/updateBook/:id", adminController.updateBook);
router.delete("/deleteBook/:id", adminController.deleteBook);

