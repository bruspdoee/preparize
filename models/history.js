const { sequelize } = require("../../project2/project2/models");

module.exports = (sequelize, DataTypes) => {
    var History = sequelize.define("History", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          company: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          //   createdAt: {
          //     type: DataTypes.INTEGER,
          //     allowNull: true,
          //   },
          notes: {
            type: DataTypes.STRING,
          },
    });

    History.associate = function(models) {
        History.belongsTo(models.User);
    };

    return History;
};