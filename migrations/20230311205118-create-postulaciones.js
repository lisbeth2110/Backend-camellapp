'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postulaciones', {
      id_postulaciones: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
     id_ofertaEmpleo: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'ofertaEmpleos',
          },
          key:'id_ofertaEmpleo'
        },
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('postulaciones');
  }
};