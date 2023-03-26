const Sequelize = require('sequelize');
const usuarios = require ("../models").usuario;

module.exports=
{   

    ListarUsuario(req, res) {
      return usuarios.findAll({})
      .then(usuarios => res.status(200)
      .send(usuarios)).catch(error => res.status(400).send(error));
    },
    ListarIdUsuario(req, res) {
   return usuarios.findAll({
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
    
     
    EliminarUsuario(req,res) {
      return usuarios.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}