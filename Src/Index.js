const express = require('express');
const morgan = require ('morgan');
const bodyParse = require ('body-parser');

var app = express();

//setting
app.set('port',process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(bodyParse.json());

//routes

require('./Routes/ChoferRoutes')(app);
require('./Routes/CobroRoutes')(app);
require('./Routes/InconvenientesRoutes')(app);
require('./Routes/ParadaRoutes')(app);
/*require('./Routes/ReservacionRoutes')(app);
require('./Routes/RutaRoutes')(app);
require('./Routes/SindicatoRoutes')(app);
require('./Routes/SuperIntendenciaRoutes')(app);
require('./Routes/TurnosRoutes')(app);
require('./Routes/UsuarioRoutes')(app);
require('./Routes/VehiculosRooutes')(app);*/

//statics file

app.listen(app.get('port'),()=>{

    console.log('Server in Port: '+ app.get('port'));
});


