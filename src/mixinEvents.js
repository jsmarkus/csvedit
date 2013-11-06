var mixinEvents = function() {
    'use strict';

    var proto = {
        bind: function(event, handler) {
            this._events = this._events || {};
            this._events[event] = this._events[event] || [];
            this._events[event].push(handler);
        },
        trigger: function(event /* , args... */ ) {
            this._events = this._events || {};
            if (event in this._events === false) {
                return;
            }
            for (var i = 0; i < this._events[event].length; i++) {
                this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    };


    return function(constr) {
        constr.prototype.bind = proto.bind;
        constr.prototype.trigger = proto.trigger;
    };
}();