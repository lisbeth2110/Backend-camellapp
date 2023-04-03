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
    categoria.hasMany(models.intereses, {foreignKey: 'id_categoria'});
    categoria.hasMany(models.categoria, {foreignKey: 'id_categoria'});
    }
  }
  categoria.init({

    id_categoria: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'categoria',
    tableName: 'categoria'
  });
  return categoria;
};