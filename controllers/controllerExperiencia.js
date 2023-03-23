const Sequelize = require('sequelize');
const experiencia= require ("../models").experiencia;

module.exports=

{   

    ListarExperiencia(req, res) {
      return experiencia.findAll({})
      .then(experiencia => res.status(200).send(experiencia))
    .catch(error => res.status(400).send(error));
    },



    ListarIdExperiencia(req, res) {
   return experiencia.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(experiencia => res.status(200).send(experiencia))
    .catch(error => res.status(400).send(error));
    },


   GuardarExperiencia(req, res){
        let experiencia = experiencia  .create({
                id_usuario: req.body.id_usuario,
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                lugarDeTrabajo: req.body.lugarTrabajo,
                exprienciaDeTrabajo: req.body.exprienciaDeTrabajo
              
             
        }).then(experiencia => res.status(200).send(experiencia))
        .catch(error => res.status(400).send(error));

            return(experiencia.id); 
            
    },


     
    EliminarExperiencia(req,res) {
      return experiencia.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}