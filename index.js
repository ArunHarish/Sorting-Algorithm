var QuickSort = require("./QuickSort/QuickSort.js");
var MergeSort = require("./MergeSort/MergeSort.js");
var HeapSort = require("./HeapSort/HeapSort.js");

function generateRandom() {
    var random = new Array(20000500);
    for(var x = 0; x < random.length; x++) {
        random[x] = Math.floor(1 + Math.random() * 10000);
    }
    return random;
}

function check(array, sortType) {
    var lastValue = array[0];

    for(var x = 1; x < array.length; x++) {
        if(
            (sortType < 0 && array[x] > lastValue) || 
            (sortType > 0 && array[x] < lastValue)
        )
            return false;
        
        lastValue = array[x];
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

}

test();