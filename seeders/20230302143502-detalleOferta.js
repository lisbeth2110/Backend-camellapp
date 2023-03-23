module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('detalleOferta',[
        {
          id_detalleOferta:1,
          id_categoria: 1,
        },
        {
          id_detalleOferta:2,
          id_categoria: 2,
        },
        {
          id_detalleOferta:3,
          id_categoria: 3,
        },
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('detalleOferta', null, {});
    }
  };