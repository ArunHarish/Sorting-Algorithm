"use strict";

const LinkedNodes = require("../Misc/LinkedNodes.js");
const privateMap = new WeakMap();

class StackList {
    /** Constructor function initialising currentNode and lastNode
     * 
     * @param firstElement 
     */
    constructor(firstElement) {

        let value = {
            firstNode : null,
            currentNode : null
        };

        if(firstElement != null) {
            value.firstNode = new LinkedNodes(firstElement);
            value.currentNode = value.firstNode;
        }

        privateMap.set(this, value);
    }
    push(newElement) {
        
        if(newElement == null)
            return;

        let object = privateMap.get(this);
        
        if(object.firstNode == null) {
            // Meaning the @param newElement is the first element
            object.firstNode = new LinkedNodes(newElement);
            object.currentNode = object.firstNode;
        }
        else {
            // At least one element exists in the list
            const newNode = new LinkedNodes(newElement);
            //Connecting both the nodes
            object.currentNode.setNextNode(newNode);
            newNode.setPrevNode(object.currentNode);
            //Refering the new node as the current node
            object.currentNode = newNode;
        }

    }
    pop() {
        
        let object = privateMap.get(this);
        let currentNode = object.currentNode;
        let firstNode = object.firstNode;

        if(firstNode == null)
            return null;
        
        let currentValue = currentNode.getValue();
        let prevNode = currentNode.getPrevNode();

        currentNode.setPrevNode(null);
        delete object.currentNode;

        if(currentNode == firstNode)
            delete object.firstNode;
        else
            object.currentNode = prevNode;

        return currentValue;

    }
}

module.exports = StackList;