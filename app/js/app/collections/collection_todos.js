/*
    Author:
    Ankit Doshi

    Date-Created:
    9-Dec-2015
    
    File-Name:
    collection_todos.js

    Description:
    This file will create Backbone Collection for Todo Models

    
*/



var Todos = Backbone.Collection.extend({
    model: Todo
});

module.exports = Todos;
