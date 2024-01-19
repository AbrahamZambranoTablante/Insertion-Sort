# Insertion Sort

## INTRODUCTION 

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## ALGORITHM DESCRIPTION

1. Initialization of an array with unsorted numbers inside

```js
const array = [9, 6, 3, 8, 1, 4, 6, 2];
```
2. Declare a function and inialization of a temporary variable

```js
// function declaration taking an array as parameter
function insertionSort (arr){
// its necesary to initiate a numeric variable thats its going to be use as a temporary value holder
    let temp = 0;
```

3. Iteration through each element value of the array, then take the value to the right and assign it to the temporary variable 

```js
// declare a (for) loop to iterate through the array, its important to initiate this (for) loop on 1
// because 1 its the index of the first element to the right on the array
    for(let i = 1; i < arr.length; i++){
// lets assign to our variable (temp) to the first element on the right
        temp = arr[i];
```
4. Compare the value on the left against the value holded on our temporary variable, if its a higher swap places and insert the temporary value inside the open spot, repeat this action until the value on J gets equal to 0 and the for loop test the last element on the array, finally return the array with the sorted numbers

```js
// declare a while loop that is going to run if the value on (j) its equal or superior than 0 
// and the array on index (j) its superior to the value on the temporary variable
        while(j >= 0 && arr[j] > temp){
// lets assign in order to move the value on index (j) to the index (j + 1) it means to the right because its superior to the value on temp
            arr[j + 1] = arr[j];
// lets decrease (j) to test the next value on left on the next iteration against the value on temp
            j--;
        }
// now because the index (j) has been decrease by 1 its needed to add 1 to index (j) for placing the temp value on the opened spot
        arr[j + 1] = temp;
    }
```

5. Repeat the loop until the array its completely sorted and return the array

![Insertion Sort Animation](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

 ```js   
// finally return the sorted array
    return arr;
}
```
## Big O Evaluation

### Time Complexity

The array have (n) length so its necesary iterate through (n - 1) in order to test each value, and for comparison between the elements its necesary run another loop (n - 1) so the worse case scenario its O(n²)

```js

function insertionSort (arr){
    let temp = 0; // variable initialization - O(1)
    for(let i = 1; i < arr.length; i++){ // for loop iterating through the array O(n)
        temp = arr[i]; // variable assigning - O(n-1)
        let j = i - 1;// variable initialization - O(n-1)
        while(j >= 0 && arr[j] > temp){ // while loop for comparing elements 0(n²)
            arr[j + 1] = arr[j]; // index assingning 0(n² - 1)
            j--; // variable decrementation 0(n² - 1)
        }
        arr[j + 1] = temp; // index assingning 0(n - 1)
    }
    return arr; // return array 0(1)
}

```
### Space Complexity

It is creating variables for (temp) doesnt need too much space on memory so it means that its an efficient algorithm on memory/space terms.


## Use Cases

Its better to use with small data inputs, not very efficient with large data sizes. Easy and simple sort method so its recommended for beginner coders.

## Edge Cases and Concerns

This algorithm its not efficient with a high amounts of inputs thats the principal concern. 
If its needed to sort big input data there's others sort methods that have better performance with high amounts of data.



# Resources - Citation 

[YouTube - Sorting Algorithms in JS : Insertion Sort] (https://www.youtube.com/watch?v=0KQyyZatDgM&ab_channel=getMaxed)

[GIF to illustrate the Insertion Sort] (https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

[Wikipedia - Insertion Sort] (https://en.wikipedia.org/wiki/Insertion_sort)

[gitHub - Independent Study Project Example] (https://github.com/10-6-pursuit/independent-study-project-example/blob/main/readme.md?plain=1)
