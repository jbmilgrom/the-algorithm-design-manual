type Compare<T> = <T>(a: T, b: T) => boolean; 

const numericalIsLessThan: Compare<number> = (a, b) => a < b;

/**
 * In place N^2 sort implementation with arrays
 */
const insertionSort = <T>(items: T[], isLessThan: Compare<T> = numericalIsLessThan): T[] => {
    let i: number;
    for (i = 0; i < items.length; i++) {
        let j: number = i;
        while (j > 0 && isLessThan<T>(items[j], items[j - 1])) {
            swap(items, j, j -1);
            j--;
        }
    }
    return items;
};

/**
 * In place swap with an array
 */
const swap = (items: any[], i: number, j: number): void => {
    const iItem = items[i];
    items[i] = items[j];
    items[j] = iItem;
};

/**
 * TEST
 */
insertionSort<number>([1,4,3,4,3,4,4,2,4,8,1,4,8,9,1]); // [ 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 8, 8, 9 ]
insertionSort<string>(['a', 'y', 'c', 'd']); // [ 'a', 'c', 'd', 'y' ]

