const express = require('express');
const app = express();
// Al trabajar con express lo que hacemos es crear un midleware,
// que permite filtrar los tipos de request, a diferencia con el 
// createServer

//Un middleware es una instrucción que se va a ejecutar siempre
//no importa que url pida la persona


const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
//Al usar este app.use, no pasa a usar el get y renderea lo que hay en public
//Si quiero acceder al home tendría que hacer localhost:3000/home.html

hbs.registerPartials(__dirname + '/views/parciales')

//Express HBS engine
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'Seba',
    //     edad: 24,
    //     url: req.url
    // }

    //res.send(salida) // Send ya se encarga de pasar nuestro diccionario a JSON, y muestra en pantalla lo que haya
    res.render('home', {
        nombre: 'seba',
        //anio: new Date().getFullYear()
    }); //Renderiza lo que hay de hbs

})

app.get('/', (req, res) => {
    
    res.send('Hola Data')

})

app.listen(port, () => console.log('Escuchando en el puerto 3000'))