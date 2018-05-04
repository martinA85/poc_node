//Import de variables
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000, // choix du port
    mongoose = require('mongoose'),
    task = require('./models/taskModels'),
    bodyParser = require('body-parser');

//Connection à la base de données
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/taskDB');

//Encode le body des requete en objet json
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Ajout des routes a l'application
var routes = require('./routes/toDoRoutes');
routes(app);

//Lancement du server sur le port choisis
app.listen(port);

//Log de demarage du server
console.log("server started on port : " + port);