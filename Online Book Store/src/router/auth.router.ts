import express, { Router } from "express";
import * as adminController from "../controller/admin.controller";

export let router: Router = express(); 

router.post("/adminreg", adminController.createUser)
router.post("/adminlogin", adminController.logUser)

router