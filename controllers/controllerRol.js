const Sequelize = require('sequelize');
const rols= require ("../models").rol;

module.exports=
{   

    ListarRol(req, res) {
      return rols.findAll({})
      .then(rols => res.status(200).send(rols))
    .catch(error => res.status(400).send(error));
    },


  ListarIdRol(req, res) {
   return rols.findOne({
    where: {
      id_rol: req.params.id 
    }
    })
    .then(rols => res.status(200).send(rols))
    .catch(error => res.status(400).send(error));
    },


   GuardarRol(req, res){
        rol = rols  .create({
                administrador : req.body.administrador,
                postulante: req.body.postulante,
                empleador: req.body.empleador
             
        }).then(rols => res.status(200).send(rols))
        .catch(error => res.status(400).send(error));

            return(rols.id); 
            
    },
    Updaterol(req, res) {
      return rols.update({
        administrador : req.body.administrador,
        postulante: req.body.postulante,
        empleador: req.body.empleador
      }, {
          where: {
              id_rol: req.params.id,
          },
      })

      .then((rols) => { res.json(rols);})
          .catch(error => res.status(400).send(error))
  },
     

    EliminarRol(req,res) {
      return rols.destroy({
        where: {
            id_rol: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}