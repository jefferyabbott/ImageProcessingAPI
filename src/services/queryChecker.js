"use strict";
exports.__esModule = true;
exports.validateQueryString = void 0;
function validateQueryString(filename, height, width) {
    var incompleteQuery = [];
    // check filename
    if (!filename) {
        incompleteQuery.push('filename is required');
    }
    // check height value
    if (height === undefined) {
        incompleteQuery.push('height is required');
    }
    else if (isNaN(height)) {
        incompleteQuery.push('height must be a number');
    }
    else if (height <= 0) {
        incompleteQuery.push('height must be greater than zero');
    }
    // check width value
    if (width === undefined) {
        incompleteQuery.push('width is required');
    }
    else if (isNaN(width)) {
        incompleteQuery.push('width must be a number');
    }
    else if (width <= 0) {
        incompleteQuery.push('width must be greater than zero');
    }
    return incompleteQuery;
}
exports.validateQueryString = validateQueryString;
