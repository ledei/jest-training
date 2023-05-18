import express from "express";
import menyController from "../controller/menyController.js";

const menuRouter = express.Router();

menuRouter.get("/bbqs", menyController.getBbq);
menuRouter.get("/burgers", menyController.getBurgers);
menuRouter.get("/desserts", menyController.getDesserts);
menuRouter.get("/steaks", menyController.getSteaks);
menuRouter.get("/drinks", menyController.getDrinks);

export default menuRouter;
