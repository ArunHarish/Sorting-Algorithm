#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include "StackList.h"
#define MAX 100

// swap
void swap(int a, int b, int input[]) {
	if(a != b) {
		int temp = input[a];
		input[a] = input[b];
		input[b] = temp;
	}
}

// comparator
int comparator(int rightValue, int pivotValue, int sortType) {
	if(sortType == -1) {
		return pivotValue < rightValue;
	}
	return rightValue < pivotValue;
}

// partition
int partition(int right, int pivot, int arrays[], int sortType) {
	int left = right;
	int pivotValue = arrays[pivot];
	while(right < pivot) {
		int rightValue = arrays[right];
		if(comparator(rightValue, pivotValue, sortType)) {
			swap(left, right, arrays);
			left++;
		}
		right++;
	}
	swap(left, pivot, arrays);
	return left;

}
// generatePosition
positionNode* generatePosition(int start, int end, int arrays[], int sortType) {
	positionNode* ret = allocPosition();
	ret->start = start;
	ret->end = end;
	ret->partition = partition(start, end, arrays, sortType);
	return ret;
}

void QuickSort(int inputArray[], int comparator) {
	// first partition
	int size = MAX;
	Stack* pIndice = allocStack();
	append(pIndice, generatePosition(0, size - 1, inputArray, comparator));
	
	int currentPivot;
	positionNode *currentPos = allocPosition();
	positionNode *firstPos = pIndice->currentNode->nodeValue;
	// Copying first element
	currentPos->start = firstPos->start;
	currentPos->partition = firstPos->partition;
	currentPos->end = firstPos->end;
	firstPos = NULL;

	while((currentPos)) {
		int partition = currentPos->partition;
		int leftStart = currentPos->start;
		int leftEnd = partition - 1;
		int rightStart = partition + 1;
		int rightEnd = currentPos->end;
		// Left Pivot
		if(leftStart < leftEnd) {
			append(pIndice, generatePosition(leftStart, leftEnd, inputArray, comparator));
		}
		// Right Pivot
		if(rightStart < rightEnd) {
			append(pIndice, generatePosition(rightStart, rightEnd, inputArray, comparator));
		}
		
		// This could be dangerous when memory is freed. Potential problem raising dangling pointers
		// currentNode = pIndice->currentNode;
		// Solution copy 
		
		if(pIndice->currentNode) {
			positionNode *lastPos = pIndice->currentNode->nodeValue;
			currentPos->start = lastPos->start;
			currentPos->partition = lastPos->partition;
			currentPos->end = lastPos->end;
			lastPos = NULL;
		}
		else // explicitly they are assigning NULL
			currentPos = NULL;
		
		pop(pIndice);

	}
	// Free currentPos
	freePosition(currentPos);
	// Free the stack
	freeStack(pIndice);
}

int main() {
    // Creating a random number sequence
    int random[MAX];
 
    srand(time(NULL));
    for(int x = 0; x < MAX; x++) {
        random[x] = rand() % 10000;
    }
	QuickSort(random, 1);
	for(int x = 0; x < MAX; x++) {
		printf("%d\n", random[x]);
	}
    return 0;
}