var express = require('express');
var router = express.Router();

const controllerCategoria = require ('../controllers/controllerCategoria');
const controllerExperiencia = require ('../controllers/controllerExperiencia');
const controllerOfertaEmpleo = require ('../controllers/controllerOfertaEmpleo');
const controllerPostulaciones = require ('../controllers/controllerPostulaciones');
const controllerRol = require ('../controllers/controllerRol');
const controllerUsuario = require ('../controllers/controllerUsuario');


/* rutas categoria */
router.get('/listarCategoria',controllerCategoria.ListarCategoria);
router.post('/guardarCategoria',controllerCategoria.GuardarCategoria);
router.get('/categoria/:id', controllerCategoria.ListarIdCategoria);
router.delete('/eliminarCategoria/:id',controllerCategoria.EliminarCategoria);

/* rutas experiencia */
router.get('/listarExperiencia',controllerExperiencia.ListarExperiencia);
router.post('/guardarExperiencia',controllerExperiencia.GuardarExperiencia);
router.put('/editarExperiencia/:id',controllerExperiencia.UpdateExperiencia);
router.get('/experiencia/:id', controllerExperiencia.ListarIdExperiencia);
router.delete('/eliminarExperiencia/:id',controllerExperiencia.EliminarExperiencia);

/* rutas ofertaEmpleo */
router.get('/listarOfertaEmpleo',controllerOfertaEmpleo.ListarOfertaEmpleo);
router.post('/guardarOfertaEmpleo',controllerOfertaEmpleo.GuardarOfertaEmpleo);
router.put('/editarOfertaEmpleo/:id', controllerOfertaEmpleo.UpdateofertaEmpleo);
router.get('/ofertaEmpleo/:id', controllerOfertaEmpleo.ListarIdOfertaEmpleo);
router.delete('/eliminarOfertaEmpleo/:id',controllerOfertaEmpleo.EliminarOfertaEmpleo);


/* rutas postulaciones */
router.get('/listarPostulaciones',controllerPostulaciones.ListarPostulaciones);
router.post('/guardarPostulaciones',controllerPostulaciones.GuardarPostulaciones);
router.get('/Postulaciones/:id', controllerPostulaciones.ListarIdPostulaciones);
router.delete('/eliminarPostulaciones/:id',controllerPostulaciones.EliminarPostulaciones);

/* rutas rol */
router.get('/listarRol',controllerRol.ListarRol);
router.post('/guardarRol',controllerRol.GuardarRol);
router.get('/rol/:id', controllerRol.ListarIdRol);
router.delete('/eliminarRol/:id',controllerRol.EliminarRol);

/* rutas usuario */
router.get('/listarUsuario',controllerUsuario.ListarUsuario);
router.post('/guardarUsuario',controllerUsuario.GuardarUsuario);
router.get('/usuario/:id', controllerUsuario.ListarIdUsuario);
router.delete('/eliminarUsuario/:id',controllerUsuario.EliminarUsuario);

module.exports = router;
