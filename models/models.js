const orm = require("../config/orm");

const burgersModel = {
  getAll: function() {
    return orm.getAll("burgers");
  },

  create: function(data) {
    // TODO: validate data

    if (data.devoured === "true") {
      data.devoured = true;
    } else {
      data.devoured = false;
    }

    return orm.create("burgers", data);
  },

  update: function() {

  }
};

module.exports = {burgersModel};