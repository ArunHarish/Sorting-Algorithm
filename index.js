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
    var heapSample = [10, 28, 128, 89, 257, 492, 587, 856, 243, 861];
    var quickSample =[10, 28, 128, 89, 257, 492, 587, 856, 243, 861];
        
    //Function goes here
    var hs = new HeapSort(heapSample);
    var qs = new QuickSort(quickSample);
    hs.sort(-1);
    qs.sort(-1);
    console.log(heapSample, quickSample);
    
    //Constant
    t2 = (new Date()).getTime();
    console.log("______________________");
    console.log(t2 - t1);
}

test();