Test job - csvedit
==================

### Features:

 * the table is updated while the user types CSV
 * the table may be sorted by clicking columns

### Missing features:

 * true CSV parsing. It does not respect quotes and escapes. For example, `abc, "de,fg"` will be parsed as 3 columns, not 2
 * types auto-detection. It does not understand dates and numbers.

### Tested in browsers

 * Chrome 24.0.1312.52
 * Firefox 24
 * IE 8


### Architecture overview

This is MVC.

 * `TableModel` - stores the rows and the column definitions
 * `TableView` - visualizes table data from the model
 * `EditorView` - works with textarea
 * `App` - the application, ties all the components together
 * `Parser` - quick and dirty CSV parser

### Known bugs

CSS styling in IE looks weird -_-

### Future improvements

 * Fix CSS for IE
 * Make normal Parser, that would parse CSV respecting quotes and escapes. Technologies - JISON parser generator.
 * Subscribe to incremental updates from textarea - detect which lines have been changed instead of redrawing all at once. Technologies: watch the caret position. If impossible, use textarea replacement libraries. Or use some kind of quick diff algorithm (for example store and compare SHA sum of each line) - for detecting which lines are actually changed.
