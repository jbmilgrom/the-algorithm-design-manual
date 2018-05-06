/**
 * Search for item in array
 * 
 * @param T[] items
 * @param (term: T) => boolean isTerm
 * @returns T|bool
 */
const iterableSearch = <T extends any>(items: T[], isTerm: (term: T, index: number) => boolean) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (isTerm(item, i)) {
            return item;
        }
    }
    return false;
};


/**
 * TEST
 */

console.log(iterableSearch([2,1,5,4,3], (num, i) => num === 3)); // 3
console.log(iterableSearch([2,1,5,4,3], (num, i) => num === 6)); // false