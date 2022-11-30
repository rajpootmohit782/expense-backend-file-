const express = require("express");
const expenseController = require("../controllers/expense");
const router = express.Router();

router.get("/ac", expenseController.getexpence);
router.post("/", expenseController.insertexpence);
router.put("/update/:id", expenseController.updateexpense);
router.delete("/delete/:id", expenseController.deleteexpence);

module.exports = router;
