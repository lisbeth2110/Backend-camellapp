const Sequelize = require('sequelize');
const  UsuarioRol = require ("../models").usuarioRol;


module.exports={   
    ListarRolusuario(req, res) {
      return  UsuarioRol.findAll({})
      .then( UsuarioRol => res.status(200).send( UsuarioRol))
     .catch(error => res.status(400).send(error));
    },


    ListarIdRolusuario(req, res) {
   return  UsuarioRol.findAll({
    where: {
      id_usuarioRol: req.params.id 
    }
    })
    .then(  UsuarioRol => res.status(200).send(UsuarioRol))
    .catch(error => res.status(400).send(error));
    },
    

   GuardarRolusuario(req, res){
                usuarioRol =  UsuarioRol  .create({
                id_rol: req.body.id_rol,
                id_usuario: req.body.id_usuario   

        }).then( UsuarioRol => res.status(200).send( UsuarioRol))
        .catch(error => res.status(400).send(error));
            return( UsuarioRol.id); 
    },
     
    EliminarRolusuario(req,res) {
      return  UsuarioRol.destroy({
        where: {
          id_usuarioRol: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}