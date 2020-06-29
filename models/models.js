const orm = require("../config/orm");

const burgersModel = {
  getAll: function() {
    try {
      return orm.getAll("burgers");
    } catch(err) {
      console.error("Error in burgerModel.getAll:", err);
    }
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

  update: function(id) {
    const data = {devoured: true};

    return orm.update("burgers", data, id);
  }
};

module.exports = {burgersModel};