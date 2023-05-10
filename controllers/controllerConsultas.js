const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const categorias = require ("../models").categoria;
const ofertaempleo = require ("../models").ofertaEmpleo;
const postulaciones = require("../models").postulaciones;
const usuarios = require("../models").usuario;
const rols = require("../models").rol;



module.exports=
{
      ConsultarpostulacionesxOferta(req, res) {    
        return ofertaempleo.findOne({
            include: {
               model: postulaciones,
               
              },
              where: {
                id_ofertaEmpleo: req.params.id,
            },
          })
            .then(ofertaempleo => res.status(200).send(ofertaempleo))
            .catch(error => res.status(400).send(error));
          
      },

  consultaofertaXcategoria(req, res) {    
    return ofertaempleo.findAll({
        include: {
            model: categorias,
          },
      })
        .then(ofertaempleo => res.status(200).send(ofertaempleo))
        .catch(error => res.status(400).send(error));
      
  },
  
  consultaofertaidXcategoria(req, res) {    
    return ofertaempleo.findOne({
        include: {
            model: categorias,
          },
          where:{
            id_ofertaEmpleo: req.params.id
          }
      })
        .then(ofertaempleo => res.status(200).send(ofertaempleo))
        .catch(error => res.status(400).send(error));
      
  },
  consultausuariosXrol(req, res) {    
    return usuarios.findAll({
        include: {
            model: rols,
          },
      })
        .then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error));
      
  },

}
