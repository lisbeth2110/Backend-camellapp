'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuarioRol.belongsTo(models.usuarios, {foreignKey: 'id_usuario'});
      usuarioRol.belongsTo(models.rol, {foreignKey: 'id_rol'});
    }
  }
  usuarioRol.init({
    id_usuarioRol: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_rol:{
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'rols',
        },
        key: 'id_rol'
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
    modelName: 'usuarioRol',
    tableName: 'usuarioRol'
  });
  return usuarioRol;
};