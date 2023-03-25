module.exports = {
    up:(queryInterface, Sequelize)=>{
      return queryInterface.bulkInsert('usuarios',[
        {
          id_usuario:1,
          nombres: "leyder",
          apellidos: "sanchez",
          nacionalidad: "colombia",
          documento: 1061544819,
          fotoPerfil: "url",
          telefono: "3246766502",
          direccion: "v/ el cairo - cajibio",
          username: "leyder",
          password: "12345678"
        },
        {
          id_usuario:2,
          nombres: "jhon",
          apellidos: "capote",
          nacionalidad: "colombia",
          documento: 10615426429,
          fotoPerfil: "url",
          telefono: "3218759455",
          direccion: "cra9 n 63",
          username: "jhonc",
          password: "12345678"
        },
        {
          id_usuario:3,
          nombres: "javier",
          apellidos: "galindez",
          nacionalidad: "colombia",
          documento: 1061531961,
          fotoPerfil: "url",
          telefono: "3242641297",
          direccion: "cll 5 n34",
          username: "yagami",
          password: "12345678"
        },    
      ]
    )
  },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
    }
  };