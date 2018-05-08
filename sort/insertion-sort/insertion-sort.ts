/**
 * In place N^2 sort implementation with arrays
 */
const insertionSort = (items: number[]): number[] => {
    let i: number;
    for (i = 0; i < items.length; i++) {
        let j: number = i;
        while (j > 0 && items[j] < items[j - 1]) {
            swapInPlace(items, j, j - 1);
            j--;
        }
    }
    return items;
};

/**
 * In place swap of items in an array
 */
const swapInPlace = (items: any[], i: number, j: number): void => {
    const iItem = items[i];
    items[i] = items[j];
    items[j] = iItem;
};

/**
 * TEST
 */
insertionSort([1,4,3,4,3,4,4,2,4,8,1,4,8,9,1]); // [ 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 8, 8, 9 ]

