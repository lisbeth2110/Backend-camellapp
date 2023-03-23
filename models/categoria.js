'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    categoria.hasMany(models.ofertaEmpleo, {foreignKey: 'id_categoria'});
    categoria.hasMany(models.usuario, {foreignKey: 'id_categoria'});
    }
  }
  categoria.init({
    id_Categoria: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
  });
  return categoria;
};