module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('categoria',[
        {
          id_categoria:1,
          nombre : "Ayudante general", 
          descripcion: "Servicio de ayudante general" 
        },
        {
          id_categoria:2,
          nombre: "Construcción",
          descripcion: "Servicios de construcción en concreto" 
        },
        {
          id_categoria:3,
          nombre: "Servicios de soldadura",
          descripcion: "Servicios de soldadura en metales: Soldadura blanda, Soldadura fuerte y Soldadura fuerte a altas temperaturas." 
        },
      
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categoria', null, {});
    }
  };