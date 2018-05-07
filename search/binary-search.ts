/**
 * Log(n) (i.e "halfing") search through a sorted array
 * @param number[] sortedArr
 * @param number item
 * @returns boolean
 */
const binarySearch = (sortedArr: number[], item: number) => {
  const length = sortedArr.length;
  const low = sortedArr[0];
  const high = sortedArr[length - 1];
  if (low === high) {
    return item === low;
  }
  if (item < low || item > high) {
    return false;
  }
  const midIndex = Math.floor(length/2);
  if (item < sortedArr[midIndex]) {
    return binarySearch(sortedArr.slice(0, midIndex), item);
  } 
  return binarySearch(sortedArr.slice(midIndex), item);
};

/**
 * TEST
 */

binarySearch([1,3,4,5,6,8,9], 8); // true
binarySearch([1,3,4,5,6,8,9], 7); // false