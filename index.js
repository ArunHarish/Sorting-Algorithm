var QuickSort = require("./QuickSort/QuickSort.js");
var MergeSort = require("./MergeSort/MergeSort.js");
var HeapSort = require("./HeapSort/HeapSort.js");
var BubbleSort = require("./BubbleSort/BubbleSort.js");

function generateRandom() {
    var random = new Array(100000);
    for(var x = 0; x < random.length; x++) {
        random[x] = Math.floor(1 + Math.random() * 10000);
    }
    return random;
}

function check(a, sortType) {

    for(var x = 1; x < a.length; x++) {
        if(!sortType && a[x] > a[x-1] || sortType && a[x] < a[x - 1])
            return false;
    }
    return true;
}


function test() {
    var t1 = (new Date()).getTime();
    var t2;
    var quickSample = generateRandom();
    //Function goes here
   

    t1 = (new Date().getTime());
    var qs = new QuickSort(quickSample);
    console.log("Started Quick sort...");
    qs.sort(1);
    t2 = (new Date()).getTime();
    console.log("Quick Sort Time: "+ (t2 - t1));
    console.log(check(quickSample, 1))
}

test();