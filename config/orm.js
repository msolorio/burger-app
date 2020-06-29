const connection = require("./connection");

const orm = {
  getAll: function(table) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM ??", [table], (err, response) => {
        if (err) reject(err);

        resolve(response);
      })
    });
  },

  create: function(table, data) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO ?? SET ?", [table, data], (err, response) => {
        if (err) reject(err);

        resolve(response);
      });
    });
  },

  update: function(table, data, id) {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE ?? SET ? WHERE id = ?", [table, data, id], (err, response) => {
        if (err) reject(err);

        resolve(response);
      });
    });
  }
};

module.exports = orm;