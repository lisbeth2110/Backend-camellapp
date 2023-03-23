'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    usuario.belongsTo(models.categoria, {foreignKey: 'id_categoria'});
    usuario.belongsTo(models.ofertaEmpleo, {foreignKey: 'id_ofertaEmpleo'});
    usuario.hasMany(models.ofertaEmpleo, {foreignKey: 'id_usuario'});
    }
  }
  usuario.init({
    id_usuario: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacionalida: DataTypes.STRING,
    documento: DataTypes.FLOAT,
    fotoPerfil: DataTypes.STRING,
    telefono: DataTypes.FLOAT,
    direccion: DataTypes.STRING,
    username: DataTypes.STRING,
    pasword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};