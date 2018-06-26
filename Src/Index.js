const express = require('express');
const morgan = require ('morgan');
const bodyParse = require ('body-parser');
const cors = require ('cors');

const app = express();

//setting
app.set('port',process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));
app.use(cors);
app.use(bodyParse.json());

//routes


//statics file

app.listen(app.get('port'),()=>{

    console.log('Server in Port: '+ app.get('port'));
});


