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
        // 32 64 1 5 6
        //

        // Base case
        if(start >= end)
            return [array[end]];

        // Recursive case 
        const middlePivot = (end - start) / 2;
        let left = this.mergeSort(array, start, Math.floor(middlePivot) );
        let right = this.mergeSort(array, start + Math.ceil(middlePivot), end );

        

        let returnArray = [];

        return returnArray;
    }

    /**
     * //Base case
        if(start >= end) {
            return array[end];
        }

        //Recursive case
        const middlePivot = (end - start) / 2;
        let left = this.mergeSort(array, start, Math.floor(middlePivot));
        let right = this.mergeSort(array, start + Math.ceil(middlePivot), end);

        console.log(start, end, array.slice(start , end + 1));
        
     */

    sort(a) {
        if(a < 0) {
            this.sortType = -1;
            this.mergeSort(this.input, 0, this.input.length - 1);
            return ;
        }
        
        this.sortType = 1;
        this.mergeSort(this.input, 0, this.input.length - 1);
        return ;
    }

}

//Test [32, 64, 1, 22, 32, 15, 19, 33]
let data = [32, 64, 1, 5, 6];
let ms = new MergeSort(data);
ms.sort(1);

console.log(data);