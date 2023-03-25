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
   ofertaEmpleo.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
   ofertaEmpleo.hasMany(models.detalleOferta, {foreignKey: 'id_ofertaEmpleo'});
   ofertaEmpleo.hasMany(models.postulaciones, {foreignKey: 'id_ofertaEmpleo'});
    }
  }
  ofertaEmpleo.init({
    id_ofertaEmpleo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    titulo: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    descripcion: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    tipoDeContrato: DataTypes.STRING,
    id_detalleOferta:{
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'detalleOferta',
        },
        key: 'id_detalleOferta'
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
    modelName: 'ofertaEmpleo',
    tableName: 'ofertaEmpleos'
  });
  return ofertaEmpleo;
};