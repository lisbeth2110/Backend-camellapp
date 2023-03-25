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
    experiencia.belongsTo(models.usuario, {foreignKey: 'id_usuario'});
    }
  }
  experiencia.init({
    id_experiencia: {
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
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    lugarDeTrabajo: DataTypes.STRING,
    experienciaDeTrabajo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'experiencia',
    tableName: 'experiencia'
  });
  return experiencia;
};