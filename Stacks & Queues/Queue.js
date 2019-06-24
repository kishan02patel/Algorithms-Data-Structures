class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new Node(value);
		if (!this.first)
			this.first = newNode;
		else
			this.last.next = newNode;

		this.last = newNode;
		return ++this.size;
	}

	dequeue() {
		if (!this.first)
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

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log("-----After adding to queue-----");
queue.traverse();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log("-----After removing from queue-----");
queue.traverse();

/*
	** Insertion O(1)
	** Removal O(1)
	** Searching O(n) -> Not important
	** Access O(n) -> Not important
*/