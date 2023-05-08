var express = require('express');
var router = express.Router();

const controllerCategoria = require ('../controllers/controllerCategoria');
const controllerExperiencia = require ('../controllers/controllerExperiencia');
const controllerOfertaEmpleo = require ('../controllers/controllerOfertaEmpleo');
const controllerPostulaciones = require ('../controllers/controllerPostulaciones');
const controllerRol = require ('../controllers/controllerRol');
const controllerUsuario = require ('../controllers/controllerUsuario');
const controllerConsultas = require ('../controllers/controllerConsultas');
const controllerRolusuario = require ('../controllers/controllerRolusuario');


/* rutas categoria */
router.get('/listarCategoria',controllerCategoria.ListarCategoria);
router.post('/guardarCategoria',controllerCategoria.GuardarCategoria);
router.get('/categoria/:id', controllerCategoria.ListarIdCategoria);
router.put('/editarcategoria/:id', controllerCategoria. Updatecategoria);
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
router.post('/guardarPostulacion',controllerPostulaciones.GuardarPostulaciones);

router.get('/Postulaciones/:id', controllerPostulaciones.ListarIdPostulaciones);
router.put('/editarPostulaciones/:id', controllerPostulaciones.Updatepostulaciones);
router.delete('/eliminarPostulaciones/:id',controllerPostulaciones.EliminarPostulaciones);

/* rutas rol */
router.get('/listarRol',controllerRol.ListarRol);
router.post('/guardarRol',controllerRol.GuardarRol);
router.get('/rol/:id', controllerRol.ListarIdRol);
router.put('/editarrol/:id', controllerRol.Updaterol);
router.delete('/eliminarRol/:id',controllerRol.EliminarRol);

/* rutas usuario */
router.get('/listarUsuario',controllerUsuario.ListarUsuario);
router.get('/verUsuario/:id',controllerUsuario.verUsuario);
// router.post('/guardarUsuario',controllerUsuario.GuardarUsuario);
router.put('/editarusuario/:id', controllerUsuario.Updateusuario);
router.delete('/eliminarUsuario/:id',controllerUsuario.EliminarUsuario);
// usuario incriptado
router.post('/Login',controllerUsuario.login)
router.post('/Registro',controllerUsuario.registro)

/* rutas rol usuario */

router.get('/listarRolUsuario',controllerRolusuario.ListarRolusuario);
router.post('/guardaRolusuario',controllerRolusuario.GuardarRolusuario);
router.get('/Rolusuario/:id', controllerRolusuario.ListarIdRolusuario);
router.delete('/eliminarRolusuario/:id',controllerRolusuario.EliminarRolusuario);

/* rutas de consultas */

router.get('/consultaUsuarioXexperiencia', controllerConsultas.consultaUsuarioXexperiencia);
router.get('/consultaUsuarioXpostulaciones', controllerConsultas.consultaUsuarioXpostulaciones);
router.get('/consultaUsuarioXofertaEmpleo', controllerConsultas.consultaUsuarioXofertaEmpleo);
router.get('/consultaOfertaEmpleoXpostulaciones', controllerConsultas.consultaOfertaEmpleoXpostulaciones);
router.get('/consultausuarioXcategoria', controllerConsultas.consultausuarioXcategoria);
router.get('/consultaUsuarioxRol', controllerConsultas.consultaUsuarioxRol);

router.get('/consultarofertaXcategoria', controllerConsultas.consultaofertaXcategoria);

router.get('/consultarpostulanteXoferta/:id', controllerConsultas.ConsultarpostulacionesxOferta);
router.get('/consultarOfertaXcategoria/:id', controllerConsultas. consultaOfertaXCategoria);

module.exports = router;

