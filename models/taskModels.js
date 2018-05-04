//Fichier de déclaration du model tache
'use strict';

//On import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Déclaration du Schema Task
var TaskSchema = new Schema({

    name: {
        type:String,
        required: 'Task must have a name'
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: [{
            type: String,
            enum: ['new' ,'waiting', 'doing', 'end']
        }],
        default: ['new']
    },
    attributeTo: {
        name : String,
        firstName: String
    }

});

module.exports = mongoose.model('Tasks', TaskSchema)