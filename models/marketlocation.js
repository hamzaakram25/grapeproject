'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarketLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MarketLocation.init({
    Latitude: DataTypes.INTEGER,
    Longitude: DataTypes.INTEGER,
    Label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MarketLocation',
  });
  return MarketLocation;
};