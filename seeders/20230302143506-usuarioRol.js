module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('usuarioRols',[
        {
          id_usuarioRol:1,
          id_usuario: 1,
          id_rol: 1,
        },
        {
          id_usuarioRol:2,
          id_usuario: 2,
          id_rol: 2,
        },
        {
          id_usuarioRol:3,
          id_usuario: 3,
          id_rol: 3,
        },
     
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarioRols', null, {});
    }
  };