var TableView = function() {
    'use strict';

    function TableView(element) {
        this._element = element;
    }

    TableView.prototype.render = function() {
        var self = this;
        var table = document.createElement('TABLE');
        this._table = table;
        table.setAttribute('class', 'csvedit-table-table');
        var tbody = document.createElement('TBODY');
        var thead = document.createElement('THEAD');
        this._headerContainer = thead;
        this._rowsContainer = tbody;
        table.appendChild(thead);
        table.appendChild(tbody);
        dom.clear(this._element.innerHTML);
        this._element.appendChild(table);

        dom.addEventListener(thead, 'click', function(event) {
            event = event || window.event; //IE fix
            if (!event.target) {
                event.target = event.srcElement;
            }

            var trg = event.target;
            var index = trg.getAttribute('data-index');
            self._notifySort(index);
        });
    };

    TableView.prototype._createCell = function(value) {
        var cell = document.createElement('TD');
        var text = document.createTextNode(value);
        cell.appendChild(text);
        return cell;
    };

    TableView.prototype._createHeaderCell = function(value, index) {
        var cell = document.createElement('TH');
        cell.setAttribute('data-index', index);
        var text = document.createTextNode(value);
        cell.appendChild(text);
        return cell;
    };

    TableView.prototype.setHead = function(row) {
        var tr = document.createElement('TR');
        for (var i = 0; i < row.length; i++) {
            var cellValue = row[i];
            var th = this._createHeaderCell(cellValue, i);
            tr.appendChild(th);
        }
        dom.clear(this._headerContainer);
        this._headerContainer.appendChild(tr);
    };

    TableView.prototype.setRows = function(rows) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < rows.length; i++) {
            var tr = this._createRow(rows[i]);
            fragment.appendChild(tr);
        }
        this._table.removeChild(this._rowsContainer);
        this._rowsContainer = document.createElement('TBODY');
        this._rowsContainer.appendChild(fragment.cloneNode(true));
        this._table.appendChild(this._rowsContainer);
    };

    TableView.prototype._createRow = function(data) {
        var tr = document.createElement('TR');
        for (var i = 0; i < data.length; i++) {
            var cellValue = data[i];
            var td = this._createCell(cellValue);
            tr.appendChild(td);
        }
        return tr;
    };

    TableView.prototype.addRow = function(data) {
        var tr = this._createRow(data);
        this._rowsContainer.appendChild(tr);
    };

    TableView.prototype.clear = function() {
        dom.clear(this._rowsContainer);
    };

    TableView.prototype._notifySort = function(fieldIndex) {
        this.trigger('sort', fieldIndex);
    };

    mixinEvents(TableView);

    return TableView;
}();