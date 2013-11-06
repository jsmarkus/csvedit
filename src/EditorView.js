var EditorView = function() {
    'use strict';

    function EditorView(element) {
        this._element = element;
        this._bindEvents(element);
    }

    mixinEvents(EditorView);

    EditorView.prototype.setText = function(text) {
        text = text + '';
        this._element.value = text;
        this.trigger('change', text);
    };

    EditorView.prototype._bindEvents = function() {
        var self = this;
        dom.addEventListener(this._element, 'keyup', function() {
            var text = self._element.value;
            self.trigger('change', text);
        });
    };

    return EditorView;
}();