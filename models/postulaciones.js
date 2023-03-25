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
    postulaciones.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
    postulaciones.belongsTo(models.ofertaEmpleo, {foreignKey: 'id_ofertaEmpleo'});
    }
  }
  postulaciones.init({
    id_postulaciones: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    id_ofertaEmpleo:{
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'ofertaEmpleos',
        },
        key: 'id_ofertaEmpleo'
      },
      allowNull: false
    },
    estado: DataTypes.STRING,
    fecha: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'postulaciones',
    tableName: 'postulaciones'
  });
  return postulaciones;
};