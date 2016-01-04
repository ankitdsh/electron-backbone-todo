var Notification = (function Notification() {

    // Checking for the Notificatin API
    var Notification = window.Notification || root.Notification || global.Notification;

    var notification = {
        notify: notify

    };



    var defaultTitle = Config.DEFAULT_NOTIFICATION_TITLE || "Todo App";
    var defaultIcon = Config.TODO_ICON_PATH || "./images/todo2.jpg";


    // PubSub Listeners    
    PubSub.on('todo:initiated', notification.notify, Config.NOTIFICATIONS.WELCOME);
    PubSub.on('todo:new', notification.notify, Config.NOTIFICATIONS.NEW);
    PubSub.on('todo:reset', notification.notify, Config.NOTIFICATIONS.RESET);
    PubSub.on('todo:remove', notification.notify, Config.NOTIFICATIONS.REMOVE);
    //PubSub.on('todo:updated', notification.notify, Config.NOTIFICATIONS.UPDATE);




    function notify(msg, title) {

        // If argument is Backbone Model then get the Todo Item Name
        var msg = (typeof msg == "object") ? (msg.get('title')) : msg;

        var notication = new Notification(this.title || title || defaultTitle, {
            body: this.body.replace('xxx', msg) || msg || "No Message specified",
            icon: defaultIcon
        });

    };



    return notification;


})();


module.exports = Notification;
