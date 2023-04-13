const Sequelize = require('sequelize');
const { QueryError } = require('sequelize');
const usuarios = require ("../models").usuario;

module.exports=
{   

  // const example = async(req, res)=>{
  //   try {
  //     const usuarios = await usuarios.finOne({
  //       where: {
  //         id_usuario: req.params.id 
  //       }
  //     })
  //     if(!usuarios){
  //       return res.status(400).json("Usuario no existetes")
  //     }
  //     res.status(200).json(usuarios)
  //   } catch (error) {
      
  //   }
  // },

    ListarUsuario(req, res) {
      return usuarios.findAll({})
      .then(usuarios => res.status(200)
      .send(usuarios)).catch(error => res.status(400).send(error));
    },
    verUsuario(req, res) {
      return usuarios.findOne({
        where: {
        id_usuario: req.params.id 
      }}).pipe(() => {
        
      })
      
       .then(usuarios => res.status(200)
       .send(usuarios)).catch(error => res.status(400).send(error));
    },
    ListarIdUsuario(req, res) {
   return usuarios.findOne({
    where: {
      id_usuario: req.params.id 
    }
    })
    .then(usuarios => res.status(200).send(usuarios))
    .catch(error => res.status(400).send(error));
    },


   GuardarUsuario(req, res){
        usuario = usuarios  .create({
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                nacionalidad: req.body.nacionalidad,
                correo: req.body.correo,
                documento: req.body.documento,
                fotoPerfil: req.body.fotoPerfil,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                username: req.body.username,
                password: req.body.password
             
        }).then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error));

            return(usuarios.id); 
            
    },
    Updateusuario(req, res) {
      return usuarios.update({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        nacionalidad: req.body.nacionalidad,
        correo: req.body.correo,
        documento: req.body.documento,
        fotoPerfil: req.body.fotoPerfil,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
      }, {
          where: {
              id_usuario: req.params.id,
          },
      })

      .then((usuarios) => { res.json(usuarios);})
          .catch(error => res.status(400).send(error))
  },
    
     
    EliminarUsuario(req, res) {
      return usuarios.destroy({
        where: {
            id_usuario: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}