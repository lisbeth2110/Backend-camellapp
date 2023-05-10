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
      usuario.hasMany(models.usuarioRol, {foreignKey: 'id_usuario'});
      usuario.hasMany(models.intereses, {foreignKey: 'id_usuario'});
     usuario.hasMany(models.experiencia, {foreignKey: 'id_usuario'});
     usuario.hasMany(models.postulaciones, {foreignKey: 'id_usuario'}); 
     usuario.hasMany(models.ofertaEmpleo, {foreignKey: 'id_usuario'}); 
     usuario.belongsTo(models.rol, {foreignKey: 'id_rol'});
    }
  }
  usuario.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    correo: DataTypes.STRING,                                                                                 
    documento: DataTypes.FLOAT,
    ciudad: DataTypes.STRING, 
    fotoPerfil: DataTypes.STRING,
    fechaNacimiento:DataTypes.STRING,
    telefono: DataTypes.FLOAT,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    username: DataTypes.STRING,
    password:DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios'
  });
  return usuario;
};