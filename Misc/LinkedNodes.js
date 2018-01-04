"use strict";

class LinkedNodes {
    constructor(value) {

        this.value = value;
        this.nextNode = null;
        this.prevNode = null;

    }
    
    setNextNode(newNext) {
        if((newNext != null && newNext.constructor != LinkedNodes) || newNext == undefined)
            return;
        this.nextNode = newNext;
    }
    setPrevNode(newPrev) {
        if((newPrev != null && newPrev.constructor != LinkedNodes) || newPrev == undefined)
            return;
        this.prevNode = newPrev;
    }

    getNextNode() {
        return this.nextNode || null;
    }
    getPrevNode() {
        return this.prevNode || null;
    }

    setValue(newValue) {
        this.value = newValue;
    }
    getValue() {
        return this.value;
    }
}

module.exports = LinkedNodes;