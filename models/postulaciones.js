'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postulaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postulaciones.init({
    id_postulaciones: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    fecha: DataTypes.STRING,
    id_ofertaEmpleo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postulaciones',
  });
  return postulaciones;
};