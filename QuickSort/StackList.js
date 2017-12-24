"use strict";
let privateMap = new WeakMap();

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
    setNextNode(next) {

        if(next == undefined || next.constructor != Node)
            return false;
        
        this.nextNode = next;

        return true;
    }
    getNextNode() {
        return this.nextNode;
    }
    setPrevNode(prev) {
        if(prev == undefined || prev.constructor != Node)
            return false;
        
        this.prevNode = prev;

        return true;
    }
    getPrevNode() {
        return this.prevNode;
    }
    getValue() {
        return this.value;
    }
}

class StackList {
    constructor(startValue) {

        let privateObject = {};

        if(startValue) {
            let startNode = new Node(startValue);
            privateObject = {
                startNode: startNode,
                endNode : startNode
            }
        }

        privateMap.set(this, privateObject);
        
    }
    push(value) {

        let privateObject = privateMap.get(this);
        
        if(
            privateObject.startNode 
        ) {
            // Create new node and get the end node
            let newNode = new Node(value);
            let endNode = privateObject.endNode;

            //Connect the end node with the last node
            endNode.setNextNode(newNode);
            newNode.setPrevNode(endNode);

            //Set the end node to be the new node
            privateObject.endNode = newNode;

            return ;

        }
        
        
        let startNode = new Node(value);

        privateMap.set(this, {
            startNode : startNode,
            endNode : startNode
        });

        return ;

    }
    pop() {

        let privateObject = privateMap.get(this);
        let start = privateObject.startNode;
        let end = privateObject.endNode;

        if(start != end)
        {
            //There exists more than one element
            let lastNodalValue = end.getValue();
            let previousNode = end.getPrevNode();

            //Set next node of the second last node to be null
            //Set prev node of the last node to be null
            //This enables any reference made by the nodes to each other will be 
            //deleted allowing garbage collector to delete the last node with 
            //assurance
            previousNode.setNextNode(null);
            end.setPrevNode(null);
            
            //Deleting the last node but due to restrictions on strict mode
            //Using the property directly
            delete privateObject.endNode;

            //Setting the endNode to be the previous node
            privateObject.endNode = previousNode;

            return lastNodalValue;
        }
        else if(
            end && 
            end == start
        ) {
            
            let lastNodalValue = privateObject.endNode.getValue()
            //There exist only one element once again using the property directly
            //Variable start and end are removed by gc once the method is finished
            //executed due to scoping
            delete privateObject.endNode;
            delete privateObject.startNode;

            return lastNodalValue;
        }

        return null;
    }
}

module.exports = StackList;