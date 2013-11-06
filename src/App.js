var App = function() {
    'use strict';

    function App() {
        this.model = new TableModel();
        this.view = new TableView(document.getElementById('table_container'));
        this.editor = new EditorView(document.getElementById('editor'));
        this.parser = new Parser();
    }

    App.prototype._bindEvents = function() {
        if (this.eventsBound) {
            return;
        }
        this.eventsBound = true;
        var app = this;

        // this.model.bind('add', function() {
        //     console.log('add');
        // });

        this.model.bind('add', function(i) {
            var row = app.model.getRow(i);
            app.view.addRow(row);
        });

        this.model.bind('clear', function() {
            app.view.clear();
        });

        this.model.bind('fields', function() {
            app.view.setHead(app.model.getFields());
        });

        this.model.bind('reset', function() {
            var view = app.view;
            var model = app.model;
            view.clear();
            var len = model.getLength();
            //todo startTransaction(); commit()
            for (var i = 0; i < len; i++) {
                var row = model.getRow(i);
                view.addRow(row);
            }
        });

        this.editor.bind('change', function(text) {
            var rows = app.parser.parse(text);
            app.model.resetRows(rows);
        });
    };

    App.prototype.run = function() {
        this.view.render();
        this._bindEvents();

        var rows = this.parser.parse('0, asd, 234\n1,dsa,   smpg q');

        this.model.setFields(rows[0]);
        this.model.resetRows(rows);
    };

    return App;
}();
