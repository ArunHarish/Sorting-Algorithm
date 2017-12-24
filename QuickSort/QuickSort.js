"use strict";

let StackList = require("./StackList.js");

class QuickSort {
    constructor(input, comparator) {
        this.input = input;
        this.sortType = 1;
        this.comparator = comparator || this.comparator;
    }

    swap(a, b) {
        if(a != b) {
            //swap for any sortable data structures
            let temp = this.input[a];
            this.input[a] = this.input[b];
            this.input[b] = temp;
        }
        
    }
    //Default comparator if none is provided
    comparator(rightValue, pivotValue, sortType) {
        if(sortType == -1)
            return pivotValue < rightValue;
        return rightValue < pivotValue;
    }

    partition(right, pivot) {
        
        var left = right;
        var pivotValue = this.input[pivot];

        while(right < pivot) {
            
            var rightValue = this.input[right];
            if(this.comparator(rightValue, pivotValue, this.sortType)) {
                this.swap(left, right);
                left++;
            }

            right++;
        }

        this.swap(left, pivot);

        return left;
    }

    generatePosition(start, end) {
        return {
            partition : this.partition(start , end),
            start : start, 
            end : end
        }
    }
    //Using Iteration
    quickSort(a, b) {
        
        //first partition
        let pIndice = new StackList(
            this.generatePosition(a, b)
        );
        let currentPivot;

        while((currentPivot = pIndice.pop()) != null) {
            
            let leftStart = currentPivot.start;
            let leftEnd = currentPivot.partition - 1;
            
            let rightStart = currentPivot.partition + 1;
            let rightEnd = currentPivot.end;

            //Left pivot
            if(leftStart < leftEnd) {
                pIndice.push(
                    this.generatePosition(leftStart, leftEnd)
                )
            }

            //Right pivot
            if(rightStart < rightEnd) {
                pIndice.push(
                    this.generatePosition(rightStart, rightEnd)
                )
            }

        }

    }

    sort(a) {
        var length = this.input.length;
        if(a < 0) {
            this.sortType = -1;
            this.quickSort(0, length - 1);
        }
        else {
            this.sortType = 1;
            this.quickSort(0, length - 1);
        }

    }

}

module.exports = QuickSort;