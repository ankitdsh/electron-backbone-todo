/*
    Author:
    Ankit Doshi

    Date-Created:
    9-Dec-2015
    
    File-Name:
    config.js

    Description:
    This file contains various Configuration required for the Todo MVC App.    
    */





var Config = {

    ROOT_ELEMENT: '#todoApp',

    LOCALSTORAGE_KEY: 'todoApp',

    TODO_ICON_PATH: './images/todo3.png',

    DEFAULT_NOTIFICATION_TITLE: "Todo-App",

    NOTIFICATIONS: {
        WELCOME: {
            title: 'ToDO App',
            body: 'Welcome'
        },
        NEW: {
            title: 'ToDO App',
            body: 'You added a new item - xxx.'

        },
        UPDATE: {
            title: 'ToDO App',
            body: 'You updated the item - xxx'
        },
        REMOVE: {
            title: 'ToDO App',
            body: 'You removed an Item - xxx'
        },
        RESET: {
            title: 'ToDO App',
            body: 'You have deleted all Items'
        }
    },

    ALL_TODO_LIST: {

        "TODO": {
            header: 'Todo Items',
            type_id: 0,
            type: 'todo',
            listenTo: {
                add: true,
                remove: true
            },
            show_remove: false,
            drag_allowed: true,
            drop_allowed: true
        },
        "INPROGRESS": {
            header: 'In-Progress',
            type_id: 1,
            type: 'inprogress',
            listenTo: {
                add: false,
                remove: true
            },
            show_remove: false,
            drag_allowed: true,
            drop_allowed: true
        },
        "COMPLETED": {
            header: 'Completed',
            type_id: 2,
            type: 'completed',
            listenTo: {
                add: false,
                remove: true
            },
            show_remove: false,
            drag_allowed: true,
            drop_allowed: true
        }
    }
};

module.exports = Config;
