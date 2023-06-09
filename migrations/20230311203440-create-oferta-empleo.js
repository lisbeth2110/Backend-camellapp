'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ofertaEmpleos', {
      id_ofertaEmpleo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.FLOAT
      },
      descripcion: {
        type: Sequelize.STRING
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.INTEGER
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'categoria',
          },
          key:'id_categoria'
        },
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'usuarios',
          },
          key:'id_usuario'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ofertaEmpleos');
  }
};