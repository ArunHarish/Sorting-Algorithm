"use strict";

class MergeSort {
    constructor() {
        
    }

    comparator() {
        if(this.sortType == -1)
            return ;
        return ;
    }

    mergeSort() {
        console.log(true);
        //this.mergeSort();
    }

    sort(a) {
        if(a < 0) {
            this.sortType = -1;
            this.mergeSort();
            return ;
        }
        
        this.sortType = 1;
        this.mergeSort();
        return ;
    }

}

module.exports = MergeSort;