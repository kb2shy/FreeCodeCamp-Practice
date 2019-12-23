const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {

        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j+1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }

    return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
