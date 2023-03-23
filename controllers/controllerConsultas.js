const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const experiencia = require("../models").experiencia;
const categoria = require ("../models").categoria;
const detalleOferta = require ("../models").detalleOferta;
const ofertaEmpleos = require ("../models").ofertaEmpleos;
const intereses = require ("../models").intereses;
const postulaciones = require("../models").postulaciones;
const usuarios = require ("../models").usuarios;
const rols = require ("../models").rols;


module.exports=
{
  consultaOfertaxCategoria(req, res) {    
        return ofertaEmpleos.findAll({
            include: {
               model: detalleOferta,
               include:{
                model: categoria
               }
              },

          })
            .then(ofertaEmpleos => res.status(200).send(ofertaEmpleos))
            .catch(error => res.status(400).send(error));
          
      },

      
  consultaUsuariosxCategoria(req, res) {    
    return usuarios.findAll({
        include: {
           model: intereses,
           include:{
            model: categoria
           }
          },

      })
        .then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error));
      
  },

  consultaUsuariosxOfertaempleo(req, res) {    
    return usuarios.findAll({
        include: {
           model: postulaciones,
           include:{
            model: ofertaEmpleos
           }
          },

      })
        .then(usuarios => res.status(200).send(usuarios))
        .catch(error => res.status(400).send(error));
      
  },


  consultaOfertaxUsuario(req, res) {    
    return empleador.findAll({
        include: {
          model: ofertaEmpleos
          }

      })
        .then(empleador => res.status(200).send(empleador))
        .catch(error => res.status(400).send(error.toString()));
      
  },
}