var TableView = function() {
    'use strict';

    function TableView(element) {
        this._element = element;
    }

    TableView.prototype.render = function() {
        var table = document.createElement('TABLE');
        table.setAttribute('class', 'csvedit-table-table');
        var tbody = document.createElement('TBODY');
        var thead = document.createElement('THEAD');
        this._headerContainer = thead;
        this._rowsContainer = tbody;
        table.appendChild(thead);
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

    TableView.prototype._createHeaderCell = function(value) {
        var cell = document.createElement('TH');
        var text = document.createTextNode(value);
        cell.appendChild(text);
        return cell;
    };

    TableView.prototype.setHead = function(row) {
        var tr = document.createElement('TR');
        for (var i = 0; i < row.length; i++) {
            var cellValue = row[i];
            var th = this._createHeaderCell(cellValue);
            tr.appendChild(th);
        }
        dom.clear(this._headerContainer);
        this._headerContainer.appendChild(tr);
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
        // dom.clear(this._headerContainer);
        dom.clear(this._rowsContainer);
    };

    mixinEvents(TableView);

    return TableView;
}();
