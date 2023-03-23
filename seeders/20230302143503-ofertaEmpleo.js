module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.bulkInsert('ofertaEmpleos',[
      {
        id_ofertaEmpleo:1,
        titulo: "busco ayudante",
        salario: "salario minimo",
        descripcion: "requiero ayudante general para obra de construccion en popayan",
        
        id_detalleOferta: 1,
        id_usuario: 1
      },
      {
        id_ofertaEmpleo:2,
        titulo: "busco maestro de obra", 
        salario: "salario minimo",
        descripcion: "requiero servicio de maestro de obra para conjunto cerrado en popayan",
        ubicacion: "calle 66",
        id_detalleOferta: 2,
        id_usuario: 2
      },
      {
        id_ofertaEmpleo:3,
        titulo: "constructor",
        salario: "salario minimo",
        descripcion: "necesito persona para trabajar en area de contruccion con experiencia",
        ubicacion: "calle 67",
        id_detalleOferta: 3,
        id_usuario: 3
      },
    ]
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ofertaEmpleos', null, {});
  }
};