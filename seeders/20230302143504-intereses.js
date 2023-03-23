
module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('intereses',[
        {
          id_intereses: 1,
          id_usuario: 1,
          id_categoria: 1
        },
        {
          id_intereses: 2,
          id_usuario: 2,
          id_categoria: 2
        },
        {
          id_intereses: 3,
          id_usuario: 3,
          id_categoria: 3
          },
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('intereses', null, {});
    }
  };