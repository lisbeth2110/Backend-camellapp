const Sequelize = require('sequelize');
const postulaciones= require ("../models").postulaciones;

module.exports=
{   

    ListarPostulaciones(req, res) {
      return postulaciones.findAll({})
      .then(postulaciones => res.status(200).send(postulaciones))
    .catch(error => res.status(400).send(error));
    },


    ListarIdPostulaciones(req, res) {
   return postulaciones.findAll({
    where: {
      id_postulaciones: req.params.id 
    }
    })
    .then(postulaciones => res.status(200).send(postulaciones))
    .catch(error => res.status(400).send(error));
    },


   GuardarPostulaciones(req, res){
        let postulaciones = postulaciones.create({
                id_usuario: req.body.id_usuario,
                fecha: req.body.fecha,
                estado: req.body.estado,
                id_ofertaEmpleo: req.body.id_ofertaEmpleo
             
        }).then(postulaciones => res.status(200).send(postulaciones))
        .catch(error => res.status(400).send(error));
            return(postulaciones.id); 
    },

     
    EliminarPostulaciones(req,res) {
      return postulaciones.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}