module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('postulaciones',[
        {
          id_postulaciones:1,
          id_ofertaEmpleo: 1,
          fecha: "02 marzo 2023",
          estado: "registrado",
          id_usuario: 1
         
        },
        {
          id_postulaciones:2,
          id_ofertaEmpleo: 2,
          fecha: "25 enero 2023",
          estado: "seleccionado",
          id_usuario: 2
         
        },
        {
          id_postulaciones:3,
          fecha: "19 noviembre 2022",
          estado: "registrado",
          id_usuario:3, 
          id_ofertaEmpleo: 3
        },
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('postulaciones', null, {});
    }
  };
