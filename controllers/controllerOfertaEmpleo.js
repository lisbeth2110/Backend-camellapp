const Sequelize = require('sequelize');
const ofertaEmpleos= require ("../models").ofertaEmpleos;

module.exports=

{   

    ListarOfertaEmpleo(req, res) {
      return ofertaEmpleos.findAll({})
      .then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
    .catch(error => res.status(400).send(error));
    },


    ListarIdOfertaEmpleo(req, res) {
   return ofertaEmpleos.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
    .catch(error => res.status(400).send(error));
    },


   GuardarOfertaEmpleo(req, res){
        let ofertaEmpleos = ofertaEmpleos.create({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            salario: req.body.salario,
            ubicacion: req.body.ubicacion,
            id_detalleOferta: req.body.id_detalleOferta,
            id_usuario: req.body.id_usuario
                
             
        }).then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
        .catch(error => res.status(400).send(error));
            return(ofertaEmpleos.id); 
    },
     

    EliminarOfertaEmpleo(req,res) {
      return ofertaEmpleos.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}