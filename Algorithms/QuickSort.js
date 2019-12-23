const quickSort = (array, left, right) => {
    let index;
    if (array.length > 1) {
        left = typeof left !== "number" ? 0 : left;
        right = typeof right !== "number" ? array.length - 1 : right;

        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}

const partition = (arr, left, right) => {
    let pivot = arr[Math.floor((right + left) / 2)],
    i = left, 
    j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const arr1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(quickSort(arr1));