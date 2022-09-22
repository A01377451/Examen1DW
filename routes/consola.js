const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola');

//Formulario
router.get('/examen/formulario', consolaController.getExamenFormulario);

//Procesar Form data
router.post('/examen/validacion', consolaController.postExamenFormulario);

module.exports = router;