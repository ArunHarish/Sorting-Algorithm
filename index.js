var QuickSort = require("./QuickSort/QuickSort.js");
var MergeSort = require("./MergeSort/MergeSort.js");
var HeapSort = require("./HeapSort/HeapSort.js");

function generateRandom() {
    var random = new Array(10);
    for(var x = 0; x < random.length; x++) {
        random[x] = Math.floor(1 + Math.random() * 1000);
    }
    return random;
}


function test() {
    var t1 = (new Date()).getTime();
    var t2;
    var random = generateRandom();
        
    //Function goes here
    var hs = new QuickSort(random);

    hs.sort(1);

    console.log(random);
    
    //Constant
    t2 = (new Date()).getTime();
    console.log("______________________");
    console.log(t2 - t1);
}

test();