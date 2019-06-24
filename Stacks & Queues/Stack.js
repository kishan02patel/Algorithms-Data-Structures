class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		return ++this.size;
	}

	pop() {
		if (!this.size)
			return null;
		let removedNode = this.first;
		if (this.size === 1) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return removedNode.value;
	}

	traverse() {
		let nodeValues = '';
		let current = this.first;
		while (current) {
			nodeValues += ' ' + current.value;
			current = current.next;
		}
		console.log(nodeValues);
	}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.traverse();
stack.push(3);
stack.push(4);
console.log("-----After Pushing-----");
stack.traverse();
stack.pop();
stack.pop();
console.log("-----After Popping-----");
stack.traverse();
stack.pop();
stack.pop();
stack.traverse();

/*
	** Insertion O(1)
	** Removal O(1)
	** Searching O(n) -> Not important
	** Access O(n) -> Not important
*/
