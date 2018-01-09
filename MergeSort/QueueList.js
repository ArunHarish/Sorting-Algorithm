"use strict";

const Nodes = require("../Misc/LinkedNodes.js");
const privateMap = new WeakMap();

class QueueList {
    constructor(firstElement) {
        let values = {
            firstNode : null,
            lastNode : null,
            length : 0
        }

        if(firstElement != null) {
            values.firstNode = new Nodes(firstElement);
            values.lastNode = values.firstNode;
        }

        privateMap.set(this, values);

    }
    append(newElement) {
        if(newElement == null)
            return ;
        
        let object = privateMap.get(this);

        if(object.firstNode == null) {
            //This is the first element in queue
            object.firstNode = new Nodes(newElement);;
            object.lastNode = object.firstNode;
        }
        else {
            //Creating new node
            const newNode = new Nodes(newElement);
            //Set the new node as next for the current last node
            object.lastNode.setNextNode(newNode);
            //Set the current last node as the previous for the new node
            newNode.setPrevNode(object.lastNode);
            //Set the new node as the last node
            object.lastNode = newNode;
        }

        object.length++;

    }

    get length() {
        return privateMap.get(this).length;
    }


    getElement() {
        const firstNode = privateMap.get(this).firstNode;

        if(firstNode == null) 
            return undefined;

        return firstNode.getValue();
    }

    shift() {

        const object = privateMap.get(this);
        const firstNode = object.firstNode;

        //If there are no first element
        if(firstNode == null)
            return null;

        const nodeValue = firstNode.getValue();
        const nextNode =  firstNode.getNextNode();

        //If there is only one element in the list
        if(firstNode == object.lastNode)
        {
            delete object.lastNode;
            
        }
        //If there are more than one element
        delete object.firstNode;
        
        object.firstNode = nextNode;
        object.length--;

        return nodeValue;
    }

}

module.exports = QueueList;