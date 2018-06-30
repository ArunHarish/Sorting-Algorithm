#ifndef STACK_H
#define STACK_H

/*
 * @author Arun Harish Balasubramonian
 *
 */
typedef struct Node Node;
typedef struct Stack Stack;
typedef struct positionNode positionNode;

typedef struct Node{
	Node *nextNode;
	Node *prevNode;
	positionNode *nodeValue;
} Node;

typedef struct Stack {
	Node *currentNode;
} Stack;

typedef struct positionNode {
	int partition ;
	int start ;
	int end ;
} positionNode;

void append(Stack*, positionNode*);
void pop(Stack*);
Stack* allocStack(void);
void freeStack(Stack*);

positionNode* allocPosition();
void freePosition(positionNode*);

#endif