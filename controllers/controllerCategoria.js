const Sequelize = require('sequelize');
const categorias= require ("../models").categoria;
; 

module.exports={   
    ListarCategoria(req, res) {
      return categorias.findAll({})
      .then(categorias => res.status(200).send(categorias))
     .catch(error => res.status(400).send(error));
    },

    ListarIdCategoria(req, res) {
   return categorias.findAll({
    where: {
      id_categoria: req.params.id 
    }
    })
    .then(categorias => res.status(200).send(categorias))
    .catch(error => res.status(400).send(error));
    },

    Updatecategoria(req, res) {
      return categorias.update({

        nombre: req.body.nombre,
        descripcion: req.body.descripcion
      }, {
          where: {
              id_categoria: req.params.id,
          },
      })

      .then((categorias) => { res.json(categorias);})
          .catch(error => res.status(400).send(error))
  },

   GuardarCategoria(req, res){
         categoria = categorias  .create({
                nombre : req.body.nombre,
                descripcion: req.body.descripcion
             
        }).then(categorias => res.status(200).send(categorias))
        .catch(error => res.status(400).send(error));

            return(categorias.id); 
            
    },
     
    EliminarCategoria(req,res) {
      return categorias.destroy({
        where: {
            id_categoria: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}