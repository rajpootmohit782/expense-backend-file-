const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "db4free.net",
  user: "rajpootmohit782",
  password: "singhmohit",
  database: "shopback",
});

exports.insertexpence = (name, amount, description, callback) => {
  console.log("hit");
  const sql = `INSERT INTO expences (name, amount, description) VALUES (?, ?, ?)`;
  const values = [name, amount, description];
  connection.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

exports.getexpence = (callback) => {
  console.log("getuser hit");
  const sql = "SELECT * FROM expences";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};
exports.updateexpense = (id, data, callback) => {
  console.log(`updateexpense hit for id ${id}`);
  const { name, amount, description } = data;

  const sql = "UPDATE expences SET name=?, amount=?, description=? WHERE id=?";
  connection.query(sql, [name, amount, description, id], (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

exports.deleteExpence = (id, callback) => {
  const sql = `DELETE FROM expences WHERE id = ?`;
  const values = [id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
