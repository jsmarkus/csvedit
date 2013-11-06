var Parser = function() {
    'use strict';

    function Parser() {

    }

    Parser.prototype.parse = function(str) {
        var strRows = str.split(/$/m);
        var rows = [];
        for (var i = 0; i < strRows.length; i++) {
            var rowString = strRows[i].replace(/^\s+|\s+$/g, '');
            var row = this._parseRow(rowString);
            rows.push(row);
        }
        return rows;
    };

    Parser.prototype._parseRow = function(str) {
        var cells = str.split(/,\s*/); //Yes, I know, it's stupid. TODO: make honest parser, that would respect quotes and escapes.
        //TODO: cast types of each cell!
        return cells;
    };

    return Parser;
}();
