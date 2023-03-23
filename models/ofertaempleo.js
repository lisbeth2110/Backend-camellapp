'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ofertaEmpleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    ofertaEmpleo.belongsTo(models.categoria, {foreignKey: 'id_categoria'});  
    ofertaEmpleo.hasMany(models.usuario, {foreignKey: 'id_ofertaEmpleo'});
    ofertaEmpleo.belongsTo(models.usuario, {foreignKey: 'id_usuario'});  
    }
  }
  ofertaEmpleo.init({
    id_ofertaEmpleo: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    TipoDeContrato: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    horario: DataTypes.STRING,
    id_DetalleOferta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ofertaEmpleos',
  });
  return ofertaEmpleo;
};