
var TableModel = function() {
    'use strict';

    function TableModel() {
        this.rows = [];
    }

    mixinEvents(TableModel);

    TableModel.prototype.clear = function() {
        this.rows = [];
        this._notifyReset();
    };

    TableModel.prototype.addRow = function(row) {
        this.rows.push(row);
        var index = this.rows.length - 1;
        this._notifyAdd(index);
    };

    TableModel.prototype.resetRows = function(rows) {
        this.rows = rows;
        this._notifyReset();
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

    TableModel.prototype._notifyAdd = function(index) {
        this.trigger('add', index);
    };

    TableModel.prototype._notifyReset = function() {
        this.trigger('reset');
    };


    return TableModel;
}();
