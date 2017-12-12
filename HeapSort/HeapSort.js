"use strict";

class HeapSort {
    constructor(input) {
        this.input = input;
        this.end = input.length;
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
        if(i > this.end)
            return null;
        return i; 
    }
    
    rightIndex(index) {
        var i = 2 * index + 2;
        if(i > this.end)
            return null;
        return i;
    }
    
    parentIndex(index) {
         return Math.max(Math.floor((index - 1) / 2), 0);
    }
    
    get maxHeap() {
        
        function maxHeapify(index) {
            //Base Case
            //Who knew undefined == null 
            if(index > this.end || index === null)
                return null;
                
            var index = index || 0;
            var indexLeft = this.leftIndex(index);
            var indexRight = this.rightIndex(index);
            
            var leftChild = input[indexLeft] || null;
            var rightChild = input[indexRight] || null;
            var currentNode = input[index];
            
            //Recursive Case
            
            if((leftChild >= rightChild || (rightChild == null && leftChild != null)) && currentNode < leftChild) {
                this.swap(indexLeft, index);
                maxHeapify.call(this, this.parentIndex(index));
            }
            else if((rightChild > leftChild || (leftChild == null && rightChild != null)) && currentNode < rightChild) {
                this.swap(indexRight, index);
                maxHeapify.call(this, this.parentIndex(index));
            }
            
            maxHeapify.call(this, indexRight);
            maxHeapify.call(this, indexLeft);
            
            
            return true;
        }
        
        
        while(this.end > 0 && maxHeapify.call(this)) {
            this.swap(0, this.end--);
        }
        
        return this.input;
        
    }
    get minHeap() {
        
    }
}

var input = [
    28,
    48,
    19,
    71,
    15,
    72,
    82,
    68,
    92,
    40,
    18,
    19,
    30,
    35,
    96,
    28,
    42,
    69,
    98,
    71,
    57,
    88,
    50,
    17,
    38,
    19,
    6,
    1200
];
var a = new HeapSort(input);
a.maxHeap
console.log(input);