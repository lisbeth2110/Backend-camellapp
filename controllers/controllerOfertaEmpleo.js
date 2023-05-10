const Sequelize = require('sequelize');
const ofertaEmpleos= require ("../models").ofertaEmpleo;
const categorias = require ("../models").categoria;

module.exports=

{   

    ListarOfertaEmpleo(req, res) {
    return ofertaEmpleos.findAll({
      include: {
        model: categorias,
      },
    })
    .then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
    .catch(error => res.status(400).send(error));
    },


    ListarIdOfertaEmpleo(req, res) {
    return ofertaEmpleos.findOne({
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
        correo: req.body.correo,    
        salario: req.body.salario,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        duracion: req.body.duracion,
        celular: req.body.celular,
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
            correo: req.body.correo,
            salario: req.body.salario,
            descripcion: req.body.descripcion,
            ubicacion: req.body.ubicacion,
            duracion: req.body.duracion,
            celular: req.body.celular,
            id_categoria: req.body.id_categoria,
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