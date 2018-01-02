"use strict";
class BubbleSort {
    constructor(input) {
        this.input = input;
        this.sortType = 1;
    }

    swap(a, b) {
        let temp = this.input[a];
        this.input[a] = this.input[b];
        this.input[b] = temp;
    }

    comparator(a, b) {
        if(this.sortType == 1)
            return b > a;
        return a > b;
    }

    bubbleSort() {
        let reference = this.input;
        const arrayLength = reference.length;

        for(let x = arrayLength; x > 0; x--) {
            for(let y = 1; y < x; y++) {
                if(this.comparator(reference[y], reference[y - 1])) {
                    this.swap(y, y - 1);
                }
            }
        }
    }

    sort(order) {
        if(order < 0) {
            this.sortType = -1;
            this.bubbleSort();
            return ;
        }

        this.sortType = 1;
        this.bubbleSort();
        return ;

    }

}

module.exports = BubbleSort;