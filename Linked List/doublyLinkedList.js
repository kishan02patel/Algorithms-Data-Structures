class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class doublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length++;

		return this;
	}

	pop() {
		if (!this.tail)
			return null;

		let removedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removedNode.prev;
			this.tail.next = null;
			removedNode.prev = null;
		}
		this.length--;

		return removedNode;
	}

	shift() {
		if (!this.head)
			return null;

		let removedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedNode.next;
			this.head.prev = null;
			removedNode.next = null;
		}
		this.length--;

		return removedNode;
	}

	unshift(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;

		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length)
			return null;

		let current;
		if (index <= this.length / 2) {
			current = this.head;
			for (let i = 0; i < index; i++)
				current = current.next;
		} else {
			current = this.tail;
			for (let i = this.length - 1; i > index; i--)
				current = current.prev;
		}
		return current;
	}

	set(index, value) {
		let current = this.get(index);
		if (!current)
			return false;
		else {
			current.value = value;
			return true;
		}
	}

	insert(index, value) {
		if (index < 0 || index > this.length)
			return false;
		else if (index === 0)
			this.unshift(value);
		else if (index === this.length)
			this.push(value);
		else {
			let current = this.get(index - 1);
			let newNode = new Node(value);
			newNode.next = current.next;
			newNode.prev = current;
			current.next = newNode;
			newNode.next.prev = newNode;
			this.length++;
		}
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length)
			return null;
		else if (index === 0)
			return this.shift();
		else if (index === this.length - 1)
			return this.pop();
		else {
			let removedNode = this.get(index);
			removedNode.prev.next = removedNode.next;
			removedNode.next.prev = removedNode.prev;
			removedNode.prev = null;
			removedNode.next = null;
			this.length--;
			return removedNode;
		}
	}

	traverse() {
		let nodeValues = '';
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			nodeValues += ' ' + current.value;
			current = current.next;
		}
		console.log(nodeValues);
	}

	getLength() {
		return this.length;
	}
}

let list = new doublyLinkedList();
console.log("-----After pushing-----");
list.push(50);
list.push(100);
list.push(150);
list.push(200);
list.push(250);
list.push(300);
list.push(350);
list.push(400);
list.traverse();
console.log("-----After popping-----");
list.pop();
list.traverse();
console.log("-----After shifting-----");
list.shift();
list.traverse();
console.log("-----After unshifting-----");
list.unshift(0);
list.traverse();
console.log("-----Getting the value at 2nd, 5th and 100th index");
console.log(list.get(2));
console.log(list.get(5));
console.log(list.get(100));
console.log("-----Setting the value at 2nd and 100th index");
console.log(list.set(2, -150));
console.log(list.set(100, "Should not work"));
list.traverse();
console.log("-----Insert the value at 0th, 5th and last index");
list.insert(0, "Hi");
list.insert(5, "yo!!");
list.insert(list.getLength(), "Bye");
list.traverse();
console.log("-----Removing node at 0th, 4th and last index-----");
list.remove(0);
list.remove(4);
list.remove(list.getLength() - 1);
list.traverse();


/*
	------- Time Complexity -------
	** Insertion O(1). Arrays O(n) if inserted at first or middle.
	** Removal O(1). Arrays O(n) and O(1).
	** Searching O(n) for both.
	** Accessing O(n). Array O(1) due to index.
*/