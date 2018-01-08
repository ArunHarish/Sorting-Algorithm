"use strict";
const Queue = require("./QueueList.js");

class MergeSort {
    constructor(input) {
        this.input = input;
        this.sortType = 1;
    }

    comparator(a, b) {
        if(this.sortType == -1)
            return ;
        return ;
    }
    //Using Recursion
    mergeSort(array, start, end) {
        // Base case
        if(start >= end)
            return [array[end]];

        // Recursive case 
        const middlePivot = (end - start) / 2;
        let left = this.mergeSort(array, start, start + Math.floor(middlePivot) );
        let right = this.mergeSort(array, start + Math.floor(1 + middlePivot), end );
        let returnArray = [];

        while(left.length || right.length) {
            const bothExists = left.length && right.length;

            if(bothExists && left[0] < right[0] || left.length && !right.length) {
                returnArray.push(left[0]);
                left.shift();
            }
            else if(bothExists && right[0] <= left[0] || !left.length && right.length) {
                returnArray.push(right[0]);
                right.shift();
            }

        }

        return returnArray;
    }

    sort(a) {

        //Argument variables are reference only, any further reference by the argument variable loses the original array :(
        //This is apparently because the algorithm takes a space complexity of O(n)
        //So we cannot directly change the given array but we can change the value of each elements
        let sortedArray;

        if(a < 0) {
            this.sortType = -1;
            sortedArray = this.mergeSort(this.input, 0, this.input.length - 1);
            return ;
        }
        
        this.sortType = 1;
        sortedArray = this.mergeSort(this.input, 0, this.input.length - 1);
    
        this.input.forEach(function(a, b, c) {
            c[b] = sortedArray[b];
        })
        return ;
    }

}

//Test [32, 64, 1, 22, 32, 15, 19, 33]
let data =  [32, 64, 1, 22, 32, 15, 19, 33];
let ms = new MergeSort(data);
ms.sort(1);

console.log(data);