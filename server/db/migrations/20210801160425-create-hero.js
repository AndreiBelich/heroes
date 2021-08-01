'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      realName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "real_name"
      },
      catchPhrase: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "catch_phrase",
        unique: true
      },
      originDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "origin_description"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes');
  }
};