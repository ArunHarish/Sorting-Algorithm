"use strict";
const QueueList = require("./QueueList.js");

class MergeSort {
    constructor(input) {
        this.input = input;
        this.sortType = 1;
    }

    comparator(a, b) {
        if(this.sortType == 1)
            return a < b;
        return b < a;
    }
    //Using Recursion
    mergeSort(array, start, end) {
        let returnQueue = new QueueList();
        // Base case
        if(start >= end)
        {
            returnQueue.append(array[end]);
            return returnQueue;
        }

        // Recursive case 
        const middlePivot = (end - start) / 2;
        let left = this.mergeSort(array, start, start + Math.floor(middlePivot));
        let right = this.mergeSort(array, start + Math.floor(1 + middlePivot), end);
        
        while(left.length || right.length) {

            const bothExists = left.length && right.length;
            const leftValue = left.getElement();
            const rightValue = right.getElement();
            const comparator = this.comparator(leftValue, rightValue);

            if(bothExists && comparator || left.length && !right.length) {
                returnQueue.append(leftValue);
                left.shift();
            }
            else if(bothExists && !comparator || !left.length && right.length) {
                returnQueue.append(rightValue);
                right.shift();
            }

        }

        return returnQueue;
    }

    sort(a) {

        //Argument variables are reference only, any further reference by the argument variable loses the original array :(
        //This is apparently because the algorithm takes a space complexity of O(n)
        //So we cannot directly change the given array but we can change the value of each elements
        let sortedQueue;

        if(a < 0)
            this.sortType = -1;
        else
            this.sortType = 1;    
        
        sortedQueue = this.mergeSort(this.input, 0, this.input.length - 1);
        this.input.forEach(function(a, b, c) {
            c[b] = sortedQueue.shift();
        })
        return ;
    }

}

module.exports = MergeSort;