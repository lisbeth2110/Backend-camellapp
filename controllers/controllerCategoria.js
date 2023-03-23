const Sequelize = require('sequelize');
const categoria= require ("../models").categoria;
; 

module.exports={   
    ListarCategoria(req, res) {
      return categoria.findAll({})
      .then(categoria => res.status(200).send(categoria))
    .catch(error => res.status(400).send(error));
    },

    ListarIdCategoria(req, res) {
   return categoria.findAll({
    where: {
      id: req.params.id 
    }
    })
    .then(categoria => res.status(200).send(categoria))
    .catch(error => res.status(400).send(error));
    },

   GuardarCategoria(req, res){
        let categoria = categoria  .create({
                nombre : req.body.nombre,
                descripcion: req.body.descripcion
             
        }).then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error));

            return(categoria.id); 
            
    },
     
    EliminarCategoria(req,res) {
      return categoria.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}