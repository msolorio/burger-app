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
    console.log('data:', data);
    

    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO ?? SET ?", [table, data], (err, response) => {
          if (err) reject(err);

          resolve(response);
        });
    });
  }
};

module.exports = orm;