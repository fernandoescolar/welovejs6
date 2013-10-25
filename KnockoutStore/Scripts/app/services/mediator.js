"use strict";

var mediator = (function () {

    var handlers = {};

    function register(handler, fn) {
        if (!handlers[handler]) handlers[handler] = [];
        handlers[handler].push({ context: this, callback: fn });
    }

    function notify(handler) {
        if (!handlers[handler]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = handlers[handler].length; i < l; i++) {
            var subscription = handlers[handler][i];
            subscription.callback.apply(subscription.context, args);
        }
    }

    return {
        register: register,
        notify: notify
    };
}());
