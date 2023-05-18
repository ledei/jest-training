import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/debitcard", userController.getDebitCard);
router.get("/address", userController.getAdress);
router.get("/balance", userController.getBalance);

router.patch("/debitcard", userController.updateDebitCard);
router.patch("/address", userController.updateAddress);
router.patch("/balance", userController.updateBalance);

// router.get("/balance", userController.getBalance);
// router.get("/debitCard", userController.getDebitCard);
// router.get("/address", userController.getAddress);

// router.patch("/debitCard", userController.updateDebitCard);
// router.patch("/address", userController.updateAdress);
// router.patch("/balance", userController.updateBalance);

export default router;
