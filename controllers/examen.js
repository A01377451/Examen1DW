const path = require("path")

// proceso cuando se llame a la ruta
exports.getExamenFormulario= (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'views', 'forma.html'))
}

exports.postExamenFormulario = (req, res)=>{
    console.log(req.body);
    nombre = req.body.nombre;
    apellido = req.body.apellido;
    tel = req.body.tel;
    cel = req.body.cel;
    if(nombre && apellido && tel && cel){
        res.json({datosCompletos:"afirmativo"});
    } else {
        res.json({datosCompletos:"negativo"});
    }
}
