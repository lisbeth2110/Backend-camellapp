const Sequelize = require('sequelize');
const experiencias= require ("../models").experiencia;

module.exports=

{   
    ListarExperiencia(req, res) {
      return experiencias.findAll({})
      .then(experiencias => res.status(200).send(experiencias))
    .catch(error => res.status(400).send(error));
    },


    ListarIdExperiencia(req, res) {
   return experiencias.findOne({
    where: {
      id_experiencia: req.params.id 
    }
    })
    .then(experiencias => res.status(200).send(experiencias))
    .catch(error => res.status(400).send(error));
    },

    UpdateExperiencia(req, res) {
      return experiencias.update({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        lugarDeTrabajo: req.body.lugarTrabajo,
        exprienciaDeTrabajo: req.body.exprienciaDeTrabajo,
        nombre: req.body.nombre,
        celular: req.body.celular,
        correo: req.body.correo
      
      }, {
          where: {
              id_experiencia: req.params.id,
          },
      })

      .then((experiencias) => { res.json(experiencias);})
          .catch(error => res.status(400).send(error))
  },

   GuardarExperiencia(req, res){
               experiencia = experiencias  .create({
                id_usuario: req.body.id_usuario,
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                lugarDeTrabajo: req.body.lugarDeTrabajo,
                exprienciaDeTrabajo: req.body.exprienciaDeTrabajo,
                nombre: req.body.nombre,
                celular: req.body.celular,
                correo: req.body.correo
             
        }).then(experiencias => res.status(200).send(experiencias))
        .catch(error => res.status(400).send(error));

            return(experiencias.id); 
            
    },
    EliminarExperiencia(req,res) {
      return experiencias.destroy({
        where: {
            id_experiencia: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}