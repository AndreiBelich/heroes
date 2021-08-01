'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hero_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "hero_id",
        references: {
          model: "heroes",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "restrict"
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
    await queryInterface.dropTable('hero_images');
  }
};