/**
 * In place N^2 sort implementation
 */
var insertionSort = function (items, isLessThan) {
    if (isLessThan === void 0) { isLessThan = numericalIsLessThan; }
    var i;
    for (i = 0; i < items.length; i++) {
        var j = i;
        while (j > 0 && isLessThan(items[j], items[j - 1])) {
            swap(items, j, j - 1);
            j--;
        }
    }
    return items;
};
/**
 * In place swap
 */
var swap = function (items, i, j) {
    var iItem = items[i];
    items[i] = items[j];
    items[j] = iItem;
};
var numericalIsLessThan = function (a, b) { return a < b; };
