'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  intereses.init({
    id_intereses: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_categoria:{
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'categoria',
        },
        key: 'id_categoria'
      },
      allowNull: false
    },

    id_usuario:{
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'usuarios',
        },
        key: 'id_usuario'
      },
      allowNull: false
    },
  
  }, {
    sequelize,
    modelName: 'intereses',
    tableName: 'intereses'
  });
  return intereses;
};