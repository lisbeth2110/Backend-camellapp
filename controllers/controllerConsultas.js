const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const categoria = require ("../models").categoria;
const ofertaempleo = require ("../models").ofertaEmpleo;
const intereses = require ("../models").intereses;
const postulaciones = require("../models").postulaciones;
const experiencia = require ("../models").experiencia;
const rol = require ("../models").rols;
const usuario = require ("../models").usuario;
const usuarioRol = require ("../models").usuarioRols;



module.exports=
{
    consultaUsuarioXexperiencia(req, res) {    
        return usuario.findAll({
            include: {
               model: experiencia
              }
    
          })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
          
      },

      consultaUsuarioXpostulaciones(req, res) {    
        return usuario.findAll({
            include: {
               model: postulaciones
              }
    
          })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
          
      },


      consultaUsuarioXofertaEmpleo(req, res) {    
        return usuario.findAll({
            include: {
               model: ofertaempleo
              }
    
          })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
          
      },

      consultaOfertaEmpleoXpostulaciones(req, res) {    
        return ofertaempleo.findAll({
            include: {
               model: postulaciones
              }
    
          })
            .then(ofertaempleo => res.status(200).send(ofertaempleo))
            .catch(error => res.status(400).send(error));
          
      },

      ConsultarpostulacionesxOferta(req, res) {    
        return ofertaempleo.findOne({
            include: {
               model: postulaciones
              },
              where: {
                id_ofertaEmpleo: req.params.id,
            },
          })
            .then(ofertaempleo => res.status(200).send(ofertaempleo))
            .catch(error => res.status(400).send(error));
          
      },



     consultaUsuarioxRol(req, res) {    
        return usuario.findAll({
            include: {
               model: rol,
               include:{
                model: usuarioRol
              },
            },
          })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error));
          
      },

  consultausuarioXcategoria(req, res) {    
    return usuario.findAll({
        include: {
           model: intereses,
           include:{
            model: categoria
           }
          },

      })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error));
      
  },

  consultaofertaXcategoria(req, res) {    
    return ofertaempleo.findAll({
        include: {
            model: categoria,
          },
      })
        .then(ofertaempleo => res.status(200).send(ofertaempleo))
        .catch(error => res.status(400).send(error));
      
  },

  consultaOfertaXCategoria(req, res) {    
    return ofertaempleo.findAll({
        include: {
            model: categoria,
          },
          where: {
            id_ofertaEmpleo: req.params.id,
        },
      })
        .then(ofertaempleo => res.status(200).send(ofertaempleo))
        .catch(error => res.status(400).send(error));
      
  },
}
