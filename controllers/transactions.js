//@desc get all transactions
//@route  GET /api/v1/transactions

exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

//@desc Add transactions
//@route  POST /api/v1/transactions

exports.addTransaction = (req, res, next) => {
  res.send("POST transaction");
};

//@desc delete transactions
//@route DELETE /api/v1/transactions/:id

exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transactions");
};
