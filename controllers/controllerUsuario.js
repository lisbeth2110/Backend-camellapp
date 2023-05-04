
const express = require('express');
const { QueryError } = require('sequelize');
const  router = express.Router();
const usuarios = require ("../models").usuario;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports=
{   


    ListarUsuario(req, res) {
      return usuarios.findAll({})
      .then(usuarios => res.status(200)
      .send(usuarios)).catch(error => res.status(400).send(error));
    },
    verUsuario(req, res) {
      return usuarios.findOne({
        where: {
        id_usuario: req.params.id 
      }})
      
      .then(usuarios => res.status(200)
       .send(usuarios)).catch(error => res.status(400).send(error));
    },
   
    login(req,res){
      let {correo, password} = req.body;
      //buscar usuario
      usuarios.findOne({
          where: {
              correo:correo
          }
      }).then(usuarios => {
          if (!usuarios) {
              res.status(200).json({ msg: "No se encontro ningun usuario registrado con este correo", status: "error"});
          } else {
              if (bcrypt.compareSync(password, usuarios.password)) {
                  //creamos token
                  // let token = jwt.sign({usuarios:usuarios}, authConfig.secret,{
                  //   expiresIn: authConfig.expires
                  // });
                   res.json({
                      usuarios
                      // token: token
                   });
              } else {
                  res.status(200).json({ msg: "contraseña incorrecta", status: "error"})
              }
            }
      }).catch(err =>{
          res.status(500).json(err);
      })
  },
  //registro
   registro(req,res){
      // //encriptamos contraseña
       let {nombres, apellidos, nacionalidad, ciudad, correo, documento, fotoPerfil, fechaNacimiento, telefono, direccion, username, password,id_rol} = req.body
        let contrasena = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
     //crear usuarios
     return   usuarios.create({
      nombres:nombres,
      apellidos:apellidos,
      nacionalidad:nacionalidad,
      ciudad:ciudad,
      correo:correo,
      documento:documento,
      fotoPerfil:fotoPerfil,
      fechaNacimiento:fechaNacimiento,
      telefono:telefono,
      direccion:direccion,
      username:username,
      password: contrasena,
      id_rol:id_rol
      }).then(usuarios => {

          //creamos token
          //   let token =jwt.sign({usuarios:usuarios},authConfig.secret,{
          //     expiresIn:authConfig.expires
          // });
           res.json({
            // usuarios:usuarios,
            //  token:token
            usuarios             
       });
      }).catch(err=>{
          res.status(400).json(console.error(err));
      })
  },


//    GuardarUsuario(req, res){
//         usuario = usuarios  .create({
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 nacionalidad: req.body.nacionalidad,
//                 correo: req.body.correo,
//                 documento: req.body.documento,
//                 fotoPerfil: req.body.fotoPerfil,
//                 telefono: req.body.telefono,
//                 direccion: req.body.direccion,
//                 username: req.body.username,
//                 password: req.body.password
             
//         }).then(usuarios => res.status(200).send(usuarios))
//         .catch(error => res.status(400).send(error));

//             return(usuarios.id); 
            
//     },
    Updateusuario(req, res) {
      return usuarios.update({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        nacionalidad: req.body.nacionalidad,
        correo: req.body.correo,
        documento: req.body.documento,
        fotoPerfil: req.body.fotoPerfil,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
      }, {
          where: {
              id_usuario: req.params.id,
          },
      })

      .then((usuarios) => { res.json(usuarios);})
          .catch(error => res.status(400).send(error))
  },
    
     
    EliminarUsuario(req, res) {
      return usuarios.destroy({
        where: {
            id_usuario: req.params.id
          }
    })
    .then(() => res.status(200).send(true))
    .catch(error => res.status(400).send(error));
},
}