var TableView = function() {
    'use strict';

    function TableView(element) {
        this._element = element;
    }

    TableView.prototype.render = function() {
        var table = document.createElement('TABLE');
        var tbody = document.createElement('TBODY');
        this._rowsContainer = tbody;
        table.appendChild(tbody);
        dom.clear(this._element.innerHTML);
        this._element.appendChild(table);
    };

    TableView.prototype._createCell = function(value) {
        var cell = document.createElement('TD');
        var text = document.createTextNode(value);
        cell.appendChild(text);
        return cell;
    };

    TableView.prototype.addRow = function(row) {
        var tr = document.createElement('TR');
        for (var i = 0; i < row.length; i++) {
            var cellValue = row[i];
            var td = this._createCell(cellValue);
            tr.appendChild(td);
        }
        this._rowsContainer.appendChild(tr);
    };

    TableView.prototype.clear = function() {
        dom.clear(this._rowsContainer);
    };

    mixinEvents(TableView);

    return TableView;
}();
