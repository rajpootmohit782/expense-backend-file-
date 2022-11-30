const expenceModel = require("../models/expenceModel");

exports.insertexpence = (req, res) => {
  const { name, amount, description } = req.body;

  expenceModel.insertexpence(name, amount, description, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting new expence into database");
    } else {
      res.status(200).send("New user added to database");
    }
  });
};

exports.updateexpense = (req, res) => {
  const expense = req.body;
  const id = req.params.id;
  console.log(id, expense);

  if (!expense || !id) {
    return res.status(400).send({ message: "Expense ID is required" });
  }

  expenceModel.updateexpense(id, expense, (result) => {
    if (result) {
      return res.status(200).send({ message: "Expense updated successfully" });
    } else {
      return res.status(500).send({ message: result });
    }
  });
};

exports.getexpence = (req, res) => {
  expenceModel.getexpence((result) => {
    res.status(200).send(result);
  });
};
exports.deleteexpence = (req, res) => {
  const id = req.params.id;

  expenceModel.deleteExpence(id, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error deleting expense", error: err });
    } else {
      res
        .status(200)
        .send({ message: "Expence deleted successfully", result: result });
    }
  });
};
