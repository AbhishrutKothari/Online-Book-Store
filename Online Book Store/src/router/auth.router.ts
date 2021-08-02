import express, { Router } from "express";
import * as adminController from "../controller/admin.controller";
import * as createCustomer from "../controller/customer.controller";

export let router: Router = express(); 

router.post("/adminreg", adminController.createUser)
router.post("/adminlogin", adminController.logUser)

router.post("/userreg", createCustomer.createCustomer)
router.post("/userlog", createCustomer.logUser)