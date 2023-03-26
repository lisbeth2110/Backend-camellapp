const Sequelize = require('sequelize');
const ofertaEmpleos= require ("../models").ofertaEmpleo;

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
      id_ofertaEmpleo: req.params.id 
    }
    })
    .then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
    .catch(error => res.status(400).send(error));
    },

    UpdateofertaEmpleo(req, res) {
      return ofertaEmpleos.update({
        titulo: req.body.titulo,
        salario: req.body.salario,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        tipoDeContrato: req.body.tipoDeContrato,
        id_detalleOferta: req.body.id_detalleOferta,
        id_usuario: req.body.id_usuario
      }, {
          where: {
              id_ofertaEmpleo: req.params.id,
          },
      })

      .then((ofertaEmpleos) => { res.json(ofertaEmpleos);})
          .catch(error => res.status(400).send(error))
  },

   GuardarOfertaEmpleo(req, res){
         ofertaEmpleo = ofertaEmpleos.create({
            titulo: req.body.titulo,
            salario: req.body.salario,
            descripcion: req.body.descripcion,
            ubicacion: req.body.ubicacion,
            tipoDeContrato: req.body.tipoDeContrato,
            id_detalleOferta: req.body.id_detalleOferta,
            id_usuario: req.body.id_usuario
                
             
        }).then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
        .catch(error => res.status(400).send(error));
            return(ofertaEmpleos.id); 
    },
     

    EliminarOfertaEmpleo(req,res) {
      return ofertaEmpleos.destroy({
        where: {
            id_ofertaEmpleo: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
 },
}