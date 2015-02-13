/**
 * Filter items that contains a specific char sequence
 * @param  {array} items
 * @param  {string} field
 * @param  {string} letter
 * @return {array}
 */
PolymerExpressions.prototype.contains = function (items, field, letter) {
    var filtered = [];
    items.forEach(function(item) {
        item[field].indexOf(letter) > -1 && filtered.push(item);
    });
    return filtered;
};