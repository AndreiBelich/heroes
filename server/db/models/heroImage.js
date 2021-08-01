'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HeroImage.belongsTo(models.Hero, {
        foreignKey: "heroId"
      });
    }
  };
  HeroImage.init({
    path:{
      type: DataTypes.STRING,
      allowNull: false
    },
    heroId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "hero_id"
    } 
  }, {
    sequelize,
    modelName: 'HeroImage',
    tableName: "hero_images",
    underscored: true
  });
  return HeroImage;
};