const Sequelize = require('sequelize');
const Detalleoferta= require ("../models").detalleOferta;
; 

module.exports={   
    Listardetalleoferta(req, res) {
      return Detalleoferta.findAll({})
      .then(Detalleoferta => res.status(200).send(Detalleoferta))
     .catch(error => res.status(400).send(error));
    },

    ListarIdDetalleoferta(req, res) {
   return Detalleoferta.findAll({
    where: {
        id_detalleOferta: req.params.id 
    }
    })
    .then(Detalleoferta => res.status(200).send(Detalleoferta))
    .catch(error => res.status(400).send(error));
    },
    

   GuardarDetalleoferta(req, res){
         detalleOferta = Detalleoferta  .create({
                
                id_detalleOferta: req.body.id_detalleOferta
             
        }).then(Detalleoferta => res.status(200).send(Detalleoferta))
        .catch(error => res.status(400).send(error));
            return(Detalleoferta.id); 
    },
     
    EliminarDetalleoferta(req,res) {
      return Detalleoferta.destroy({
        where: {
            id_detalleOferta: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}