#include "StackList.h"
#include <stdio.h>
#include <stdlib.h>


void append(Stack* stackList, positionNode* appendValue) {
	// Check whether stackList is empty
	if(!(stackList->currentNode)) {
		// Create a new node
		Node *newNode = malloc(sizeof(Node));
		newNode->nextNode = NULL;
		newNode->prevNode = NULL;
		newNode->nodeValue = appendValue;	
		stackList->currentNode = newNode;	
		return ;
	}

	Node * newNode = malloc(sizeof(Node));
	newNode->nextNode = NULL;
	newNode->prevNode = stackList->currentNode;
	newNode->nodeValue = appendValue;
	stackList->currentNode = newNode;
}

void pop(Stack* stackList) {
	Node *currentNode = stackList->currentNode;
	// If there is no element present then ignore
	if(!(currentNode))
		return ;
	// Get the current node value
	positionNode *nodeValue = currentNode->nodeValue;
	// Set the stackList currentNode to be the prev node
	Node *prevNode = currentNode->prevNode;
	currentNode->prevNode = NULL;
	currentNode->nextNode = NULL;
	// If previous node is not NULL
	if(prevNode)
		prevNode->nextNode = NULL;
	// Free up the space used by current node
	free(currentNode);
	// Free up the space used by node value
	freePosition(nodeValue);
	stackList->currentNode = prevNode;
}

Stack* allocStack() {
	Stack *stackList = malloc(sizeof(Stack));
	return stackList;
}

void freeStack(Stack* stackList) {
	if(stackList) {
		// Freeing stackList alone does not deallocates the node elements
		// Hence pop all nodes
		while(stackList->currentNode)
			pop(stackList);
		free(stackList);
	}
}

positionNode* allocPosition() {
	positionNode *node = malloc(sizeof(positionNode));
	return node;
}

void freePosition(positionNode* freeingNode) {
	if(freeingNode)
		free(freeingNode);
}