'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsToMany(models.Ability, {
        through: "heroes_to_abilities",
        foreignKey: "heroId"
      })
    }
  };
  Hero.init({
    nickname: {
      type:  DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    realName:{
      type: DataTypes.STRING,
      allowNull: false,
      field: "real_name",
    },
    catchPhrase:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "catch_phrase",
      
    },
    originDescription:{
      type: DataTypes.STRING,
      field: "origin_description",
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: "heroes",
    underscored: true
  });
  return Hero;
};