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
            app.view.setRows(app.model.getRows());
        });

        this.editor.bind('change', function(text) {
            var rows = app.parser.parse(text);
            app.model.setFields(rows[0]);
            app.model.resetRows(rows.slice(1));
        });

        this.view.bind('sort', function(fieldIndex) {
            app.model.sortBy(fieldIndex);
        });
    };

    App.prototype.example = function() {
        var ex = [
            'Foo, Bar, Baz',
            '2,   5,   89',
            '100, sdf, 34',
            '45,  98,  b',
            '11,  9.5, 45',
            '154, 56,  b',
            '87,  18,  s890',
        ].join('\n');
        this.editor.setText(ex);
    };

    App.prototype.run = function() {
        this.view.render();
        this._bindEvents();
        this.example();
    };

    return App;
}();