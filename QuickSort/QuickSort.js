"use strict";

class QuickSort {
    constructor(input) {
        this.input = input;
        this.sortType = 1;
    }

    swap(a, b) {
        if(a != b) {
            //Can only swap integer valued arrays
            var f = this.input[a];
            var s = this.input[b];

            // Using xor algorithm to swap values.
            f = (f ^ s) ^ (s ^= f ^ s);
            this.input[a] = f;
            this.input[b] = s;
        }
        
    }

    comparator(rightValue, pivotValue) {
        if(this.sortType == -1)
            return rightValue < pivotValue;
        return pivotValue < rightValue;
    }

    partition(right, pivot) {
        
        var left = right;
        var pivotValue = this.input[pivot];

        while(right < pivot) {
            
            var rightValue = this.input[right];
            if(this.comparator(rightValue, pivotValue)) {
                this.swap(left, right);
                left++;
            }

            right++;
        }

        this.swap(left, pivot);

        return left;
    }

    quickSort(a, b) {

        //Base case
        if(a > b) {
            return ;
        }
        
        //Recursive case
        var pIndex = this.partition(a, b);
        this.quickSort(pIndex + 1, b);
        this.quickSort(a, pIndex - 1);
    }

    sort(a) {
        var length = this.input.length;
        if(a < 0) {
            this.sortType = -1;
            this.quickSort(0, length - 1);
            return this.input;
        }
        
        this.sortType = 1;
        this.quickSort(0, length - 1);
        return this.input;
    }

}

module.exports = QuickSort;