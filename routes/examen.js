const express = require('express');
const router = express.Router();
const examenController = require('../controllers/examen');

//Formulario
router.get('/formulario', examenController.getExamenFormulario);

//Procesar Form data
router.post('/validacion', examenController.postExamenFormulario);

module.exports = router;