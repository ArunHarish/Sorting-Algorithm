"use strict";
//Comparator method can be used to sort elements.
class HeapSort {
    constructor(input) {
        this.input = input;
        this.end = input.length - 1;
    }

    swap(a, b) {
        //Can only swap integer valued arrays
        var f = this.input[a];
        var s = this.input[b];

        // Using xor algorithm to swap values.
        f = (f ^ s) ^ (s ^= f ^ s);
        this.input[a] = f;
        this.input[b] = s;
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

    maxHeap() {

        var input = this.input;


        function maxHeapify(index) {
            //Base Case
            //Who knew undefined == null 
            if (index > this.end || index === null)
                return null;

            var index = index || 0;
            var indexLeft = this.leftIndex(index);
            var indexRight = this.rightIndex(index);

            var leftChild = input[indexLeft] || null;
            var rightChild = input[indexRight] || null;
            var currentNode = input[index];

            //Recursive Case

            if (leftChild != null && (leftChild >= rightChild) && leftChild > currentNode) {
                this.swap(indexLeft, index);
                maxHeapify.call(this, this.parentIndex(index));

            } else if (rightChild != null && (rightChild >= leftChild) && rightChild > currentNode) {
                this.swap(indexRight, index);
                maxHeapify.call(this, this.parentIndex(index));
            }

            maxHeapify.call(this, indexRight);
            maxHeapify.call(this, indexLeft);


            return true;
        }


        while (this.end > 0 && maxHeapify.call(this)) {

            this.swap(0, this.end--);
        }

    }
    minHeap() {

        var input = this.input;

        function minHeapify(index) {
            //Base Case
            //Who knew undefined == null 
            if (index > this.end || index === null)
                return ;

            var index = index || 0;
            var indexLeft = this.leftIndex(index);
            var indexRight = this.rightIndex(index);

            var leftChild = input[indexLeft] || null;
            var rightChild = input[indexRight] || null;
            var currentNode = input[index];

            //Recursive Case

            if (leftChild != null && (leftChild <= rightChild) && currentNode > leftChild) {
                //if(leftChild != null && (rightChild >= leftChild && currentNode > leftChild)) {    
                this.swap(indexLeft, index);
                minHeapify.call(this, this.parentIndex(index));

            } else
            if (rightChild != null && (rightChild < leftChild) && currentNode > rightChild) {
                this.swap(indexRight, index);
                minHeapify.call(this, this.parentIndex(index));

            }

            minHeapify.call(this, indexRight);
            minHeapify.call(this, indexLeft);


            return true;
        }


        while (this.end > 0 && minHeapify.call(this)) {
            this.swap(0, this.end--);
        }

    }
}

module.exports = HeapSort;