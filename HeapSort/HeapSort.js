"use strict";


function HeapSort(input) {
    
    var length = input.length;
    var end = length - 1;
    
    function swap(a, b) {
        var f = input[a];
        var s = input[b];
        
        f = (f ^ s) ^ (s ^= f ^ s);
        
        input[a] = f;
        input[b] = s;
    
    }
    
    function leftIndex(index) {
        var i = 2 * index + 1;
        if(i > end)
            return null;
        return i; 
    }
    
    function rightIndex(index) {
        var i = 2 * index + 2;
        if(i > end)
            return null;
        return i;
    }
    
    function parentIndex(index) {
        return Math.max(Math.floor((index - 1) / 2), 0);
    }
    
    function heapify(index) {
        
        //Base Case
        //Who knew undefined == null 
        if(index > end || index === null)
            return null;
            
        var index = index || 0;
        var indexLeft = leftIndex(index);
        var indexRight = rightIndex(index);
        
        var leftChild = input[indexLeft] || null;
        var rightChild = input[indexRight] || null;
        var currentNode = input[index];
        
        //Recursive Case
        
        if((leftChild >= rightChild || (rightChild == null && leftChild != null)) && currentNode < leftChild) {
            swap(indexLeft, index);
            heapify(parentIndex(index));
        }
        else if((rightChild > leftChild || (leftChild == null && rightChild != null)) && currentNode < rightChild) {
            swap(indexRight, index);
            heapify(parentIndex(index));
        }
        
        heapify(indexRight);
        heapify(indexLeft);
        
        
        return true;
            
    }
    
    
    while(end > 0) {
        heapify();
        swap(0, end--);
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
