'use strict';

const defaultAbilities = [
  {
    name: "fly",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "strong man",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "immortal",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: "very fast",
    created_at: new Date(),
    updated_at: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("abilities", defaultAbilities, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
