var dom = function() {
    'use strict';

    return {
        clear: function(node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        },

        addEventListener: function(node, eventName, eventHandler) {
            if (window.addEventListener) {
                node.addEventListener(eventName, eventHandler, false);
                return;
            }
            if (window.attachEvent) {
                node.attachEvent('on' + eventName, eventHandler);
                return;
            }
        }
    };
}();
