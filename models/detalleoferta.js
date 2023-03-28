'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleOferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalleOferta.belongsTo(models.categoria, {foreignKey: 'id_categoria'});
      detalleOferta.hasMany(models.ofertaEmpleo, {foreignKey: 'id_detalleOferta'});
    }
  }
  detalleOferta.init({
    id_detalleOferta: {
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
  },
  {
    sequelize,
    modelName: 'detalleOferta',
    tableName: 'detalleOferta'
  });
  return detalleOferta;
};
