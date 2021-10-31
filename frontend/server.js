const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});



const api = require('./src/server/routes/api')

const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', api);

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(PORT, function(){
    console.log('Server is running on localhost:' + PORT);
});




