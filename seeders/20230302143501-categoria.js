module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('categoria',[
        {
          nombre : "Ayudante general", 
          descripcion: "Servicio de ayudante general" 
        },
        {
          nombre: "Construcción",
          descripcion: "Servicios de construcción en concreto" 
        },
        {
          nombre: "Servicios de soldadura",
          descripcion: "Servicios de soldadura en metales: Soldadura blanda, Soldadura fuerte y Soldadura fuerte a altas temperaturas." 
        },
        {
          nombre: "Plomería",
          descripcion: "Servicios de plomería, instalación y mantenimiento de tinacos, cisternas, redes de tuberías y transporte de agua potable a casa." 
        },
        {
          nombre: "Servicio de instalación eléctrica",
          descripcion: "Servicio de mantenimiento e instalacion de redes electricas" 
        },
        {
          nombre : "Pintado de paredes y techos", 
          descripcion: "Servicio de todo tipo de pintura en paredes y techos del hogar" 
        },
        {
          nombre : "Arreglos y mantenimientos del Hogar", 
          descripcion: "Servicio de mantenimiento y arreglos comunes en el hogar" 
        },
        {
          nombre: "Recogida de basura",
          descripcion: "Servicio de recogida de basura de todo tipo" 
        },
        {
          nombre: "Servicios de Jardineria",
          descripcion: "Servicio de jardineria en espacios abiertos o cerrados" 
        },
        {
          nombre: "Diseño y presupuesto",
          descripcion: "Servicio de asesoria para diseño y presupuesto para el hogar" 
        },
        {
          nombre: "Otra",
          descripcion: "Otro tipo de servicio en el area de construccion y del hogar" 
        }
      
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categoria', null, {});
    }
  };