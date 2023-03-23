'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ofertaEmpleos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_ofertaEmpleo: {
        type: Sequelize.INTEGER
      },
      titulo: {
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
      id_detalleOferta: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'detalleOferta',
          },
          key:'id'
        },
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'usuarios',
          },
          key:'id'
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