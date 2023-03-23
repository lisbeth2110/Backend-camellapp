'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  experiencia.init({
    id_experiencia: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    lugarDeTrabajo: DataTypes.STRING,
    experienciaDeTrabajo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'experiencia',
  });
  return experiencia;
};