"use strict";

class HeapSort {
    constructor(input) {
        this.input = input;
        this.end = input.length - 1;
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

    leftIndex(index) {
        var i = 2 * index + 1;
        if (i > this.end)
            return null;
        return i;
    }

    rightIndex(index) {
        var i = 2 * index + 2;
        if (i > this.end)
            return null;
        return i;
    }

    parentIndex(index) {
        return Math.max(Math.floor((index - 1) / 2), 0);
    }

    leftCondition(leftChild, rightChild, currentNode) {
        if(this.sortType == 1)
        {
            return (leftChild != null && (leftChild >= rightChild) && 
            leftChild > currentNode);
        }
            
        return (leftChild != null && (leftChild <= rightChild) && 
        currentNode > leftChild);
    }

    rightCondition(leftChild, rightChild, currentNode) {
        if(this.sortType == 1) {
            return (rightChild != null && (rightChild >= leftChild) && 
            rightChild > currentNode);
        }

        return (rightChild != null && (rightChild < leftChild) && 
        currentNode > rightChild);
    }

    heapSort() {

        var input = this.input;

        function heapify(index) {
            //Base case
            //Since undefined == null
            if(index > this.end || index === null)
                return ;

            var index = index || 0;
            var indexLeft = this.leftIndex(index);
            var indexRight = this.rightIndex(index);

            var leftChild = input[indexLeft] || null;
            var rightChild = input[indexRight] || null;
            var currentNode = input[index];
            
            //Recursive case
            if(this.leftCondition(leftChild,rightChild,currentNode)) {
                this.swap(indexLeft, index);
                heapify.call(this, this.parentIndex(index));

            } else 
            if (this.rightCondition(leftChild, rightChild, currentNode)) {
                this.swap(indexRight, index);
                heapify.call(this, this.parentIndex(index));
            }

            heapify.call(this, indexRight);
            heapify.call(this, indexLeft);

            return true;

        }

        while (this.end > 0 && heapify.call(this)) {
            this.swap(0, this.end--);
        }
    }

    sort(a) {
        if(a < 0) {
            this.sortType = -1;
            this.heapSort();
            return ;
        }

        this.sortType = 1;
        this.heapSort();
        return ;
    }

}

module.exports = HeapSort;