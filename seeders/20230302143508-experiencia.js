module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('experiencia',[
        {
          id_experiencia:1,
          id_usuario: 1,
          titulo: "manejo obra blanca",
          descripcion:"servicio de obra blanca en la ciudad de popayan",
          lugarDeTrabajo: "popayan conjunto residencial la estacion",
          experienciaDeTrabajo: "3 meses",
        
        },
        {
          id_experiencia:2,
          id_usuario: 2,
          titulo: "soldadura",
          descripcion:"especialista en diferentes tipos de soldadura",
          lugarDeTrabajo: "trabajos hechos en la ciudad de popayan",
          experienciaDeTrabajo: "1 año",

        },
        {
          id_experiencia:3,
          id_usuario: 3,
          titulo: "manejo obra negra ",
          descripcion:"especialista en diferentes tipos de obra negra",
          lugarDeTrabajo: "trabajos hechos en la ciudad de popayan",
          experienciaDeTrabajo: "1 año",
  
        },
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('experiencia', null, {});
    }
  };