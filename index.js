//imports
const express = require('express');
const path = require('path');
const examenRoutes = require('./routes/examen')

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/examen', examenRoutes);



//Lanazar app
app.listen(8080, ()=> {  //puerto donde se lanza la app
    console.log("Servidor en linea");
}) ;