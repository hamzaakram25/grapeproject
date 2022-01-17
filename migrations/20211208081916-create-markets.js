"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Markets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Market_Name: {
        type: Sequelize.STRING,
      },
      Country: {
        type: Sequelize.STRING,
      },
      Type: {
        type: Sequelize.STRING,
      },
      Status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: "0000-00-00 00:00:00",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: "0000-00-00 00:00:00",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Markets");
  },
};
