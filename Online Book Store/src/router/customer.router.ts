import express, { Router } from "express";
import * as customerController from "../controller/customer.controller";


export let router: Router = express();

router.get("/:id", customerController.getUserById);
router.post("/", customerController.createCustomer);
router.put("/updateCustomer/:id", customerController.updateCustomerById);
router.delete("/deleteCustomer/:id", customerController.deleteCustomerById);

router.get("/getBooks", customerController.getAllBooks);
router.get("/getBook/:id", customerController.getBookById);
router.get("/getBook/:author", customerController.getBookByAuthor);
