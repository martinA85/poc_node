'use strict';

module.exports = function(app){

    var toDoController = require('../controllers/toDoControllers');

    //Routes
    //Crud basique sur le model Task
    app.route('/tasks')
        .get(toDoController.list_all_tasks) //get all task
        .post(toDoController.create_task); //création d'une tache
    
    app.route('/task/:taskId') // pour les actions sur une tâche
        .get(toDoController.read_task) // get 1 task
        .put(toDoController.update_task) // update d'une task
        .delete(toDoController.delete_task); // delete d'une task

    app.route('/tasks/new').get(toDoController.get_new);

};