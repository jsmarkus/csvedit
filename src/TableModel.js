
var TableModel = function() {
    'use strict';

    function TableModel() {
        this.rows = [];
        this.fields = [];
    }

    mixinEvents(TableModel);

    TableModel.prototype.clear = function() {
        this.rows = [];
        this._notifyClear();
    };

    TableModel.prototype.addRow = function(row) {
        this.rows.push(row);
        var index = this.rows.length - 1;
        this._notifyAdd(index);
    };

    TableModel.prototype.resetRows = function(rows) {
        rows = rows || [];
        this.rows = rows;
        this._notifyReset();
    };

    TableModel.prototype.setFields = function(row) {
        row = row || [];
        this.fields = row;
        this._notifyFields();
    };

    TableModel.prototype.setSortColumn = function(colName) {
        this._sortColumn = colName;
    };

    TableModel.prototype.sort = function(row) {
        this.rows.sort(function() {
            //todo: getColumnIndex... etc...
        });
        this._notifyReset();
    };

    TableModel.prototype.getLength = function() {
        return this.rows.length;
    };

    TableModel.prototype.getRow = function(index) {
        return this.rows[index];
    };

    TableModel.prototype.getFields = function() {
        return this.fields;
    };

    TableModel.prototype._notifyAdd = function(index) {
        this.trigger('add', index);
    };

    TableModel.prototype._notifyReset = function() {
        this.trigger('reset');
    };

    TableModel.prototype._notifyClear = function() {
        this.trigger('clear');
    };

    TableModel.prototype._notifyFields = function() {
        this.trigger('fields');
    };


    return TableModel;
}();
