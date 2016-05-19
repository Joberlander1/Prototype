"use strict";

module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        owner : {
            type : DataTypes.STRING,
            allowNull : false,
          },
          address : {
            type : DataTypes.STRING,
            allowNull : false,
          },
          notes : {
            type : DataTypes.STRING,
            allowNull : false,
          },
          zip : {
            type : DataTypes.STRING,
            allowNull : false,
          },
          area :  {
            type : DataTypes.STRING,
            allowNull : false,
          },
    });

    return Todo;
};