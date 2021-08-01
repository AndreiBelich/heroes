'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroToAbility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HeroToAbility.init({
    heroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "hero_id",
      validate: {
        isNull: false
      }
    },
    abilityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "ability_id",
      validate: {
        isNull: false
      }
    }
  }, {
    sequelize,
    modelName: 'HeroToAbility',
    tableName: "heroes_to_abilities",
    underscored: true
  });
  return HeroToAbility;
};