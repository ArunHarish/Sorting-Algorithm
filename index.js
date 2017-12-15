var QuickSort = require("./QuickSort/QuickSort.js");
var MergeSort = require("./MergeSort/MergeSort.js");
var HeapSort = require("./HeapSort/HeapSort.js");

function generateRandom() {
    var random = new Array(1000);
    for(var x = 0; x < random.length; x++) {
        random[x] = Math.floor(1 + Math.random() * 10000);
    }
    return random;
}


function test() {
    var t1 = (new Date()).getTime();
    var t2;
    var heapSample = generateRandom();
    var quickSample = JSON.parse(JSON.stringify(heapSample));
    //Function goes here
   

    t1 = (new Date().getTime());
    var qs = new QuickSort(quickSample);
    console.log("Started Quick sort...");
    qs.sort(-1);
    t2 = (new Date()).getTime();
    console.log("Quick Sort Time: "+ (t2 - t1));

}

test();