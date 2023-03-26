const Sequelize = require('sequelize');
const postulacion= require ("../models").postulaciones;

module.exports=
{   

    ListarPostulaciones(req, res) {
      return postulacion.findAll({})
      .then(postulacion => res.status(200).send(postulacion))
    .catch(error => res.status(400).send(error));
    },


    ListarIdPostulaciones(req, res) {
   return postulacion.findAll({
    where: {
      id_postulaciones: req.params.id 
    }
    })
    .then(postulacion => res.status(200).send(postulacion))
    .catch(error => res.status(400).send(error));
    },


   GuardarPostulaciones(req, res){
        postulaciones = postulacion.create({
                id_usuario: req.body.id_usuario,
                fecha: req.body.fecha,
                estado: req.body.estado,
                id_ofertaEmpleo: req.body.id_ofertaEmpleo
             
        }).then(postulacion => res.status(200).send(postulacion))
        .catch(error => res.status(400).send(error));
            return(postulacion.id); 
    },

     
    EliminarPostulaciones(req,res) {
      return postulacion.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}