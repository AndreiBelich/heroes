'use strict';

const generateHero = (key) => ({
  nickname: `Hero №${key}`,
  real_name: "Super Hero",
  origin_description: "Origin Description",
  catch_phrase: `Some catch phrase ${key}`,
  created_at: new Date(),
  updated_at: new Date()
});

const generateHeroes = (amount = 20) => {
  return new Array(amount)
  .fill(null)
  .map((_, index) => generateHero(index));
}


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
   await queryInterface.bulkInsert("heroes", generateHeroes(), {});
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
