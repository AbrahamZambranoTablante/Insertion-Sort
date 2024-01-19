
function insertionSort (arr){
    let temp = 0;
    for(let i = 1; i < arr.length; i++){
        temp = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertionSort([9, 6, 3, 8, 1, 4, 6, 2]));