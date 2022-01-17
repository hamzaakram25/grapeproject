'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmailBuilder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EmailBuilder.init({
    Market_id: DataTypes.INTEGER,
    Builder_data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmailBuilder',
  });
  return EmailBuilder;
};