'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes_to_abilities', {
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "hero_id",
        references: {
          model: "heroes",
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "restrict"
      },
      abilityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "ability_id",
        references: {
          model: "abilities",
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
    await queryInterface.dropTable('heroes_to_abilities');
  }
};