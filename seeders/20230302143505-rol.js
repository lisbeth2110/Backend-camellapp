
module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('rols',[
        {
          id_rol: 1,
          administrador: "seleccionar",
          postulante: "seleccionar",
          empleador: "seleccionar",
        },
        {
          id_rol: 2,
            administrador: "seleccionar",
            postulante: "seleccionar",
            empleador: "seleccionar",
        },
        {
          id_rol: 3,
            administrador: "seleccionar",
            postulante: "seleccionar",
            empleador: "seleccionar",
        },
    
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('rols', null, {});
    }
  };