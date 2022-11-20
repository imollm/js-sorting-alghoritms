/**
 * QUICK SORT
 * Complexity
 * Best: O(n * log n)
 * Worst: O(n^2)
 * Average: O(n * log n)
 * 
 * @param {Array} items
 * @param {Number} left
 * @param {Number} right
 * @returns {Array} sorted items
 */
 const quickSort = (items, left, right) => {
    let index;

    const swap = (items, leftIndex, rightIndex) => {
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

    const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

const itemsToBeSorted = [3, 7, 1, 9, 4, 2];
const size = itemsToBeSorted.length - 1;

console.log(`QuickSort - ${quickSort(itemsToBeSorted, 0, size)}`);
