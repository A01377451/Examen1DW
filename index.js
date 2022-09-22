//imports
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola')

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola', consolaRoutes);


//Definición de la aplicación
app.get('/', (request,response)=> {
    console.log('wuu'); //en la consola del servidor
    response.send('<h1>prueba</h1>'); //en el front end
});



//Lanazar app
app.listen(8081, ()=> {  //puerto donde se lanza la app
    console.log("Servidor en linea");
}) ;