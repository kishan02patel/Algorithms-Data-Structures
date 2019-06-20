class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let node = new Node(val);

		if (!this.head)
			this.head = node;
		else
			this.tail.next = node;

		this.tail = node;
		this.length++;
		return this;
	}

	pop() {
		if (!this.head)
			return null;

		let current = this.head;
		let prev = this.head;
		while (current.next) {
			prev = current;
			current = current.next;
		}

		prev.next = null;
		this.tail = prev;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift() {
		if (!this.head)
			return null;

		let removedNode = this.head;
		this.head = removedNode.next;
		this.length--;

		if (this.length === 0)
			this.tail = null;

		return removedNode;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	traverse() {
		let nodeValues = '';
		let current = this.head;
		while (current) {
			nodeValues += ' ' + current.value;
			current = current.next;
		}
		console.log(nodeValues);
	}

	get(index) {
		if (index < 0 || index >= this.length)
			return null;

		let current = this.head;
		for (let i = 1; i <= index; i++) {
			current = current.next;
		}

		return current;
	}

	set(index, value) {
		let current = this.get(index);
		if (current) {
			current.value = value;
			return true;
		}

		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length)
			return false;

		if (index === 0)
			this.unshift(value);
		else if (index === this.length)
			this.push(value);
		else {
			let current = this.get(index - 1);
			let newNode = new Node(value);
			newNode.next = current.next;
			current.next = newNode;
			this.length++;
		}

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length)
			return null;

		if (index === 0)
			return this.shift();
		else if (index === this.length - 1)
			return this.pop();
		else {
			let prevNode = this.get(index - 1);
			let removed = prevNode.next;
			prevNode.next = removed.next;
			this.length--;
			return removed;
		}
	}

	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let prev = null;
		let next;
		for (let i = 0; i < this.length; i++) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		return this;
	}

	getLength() {
		return this.length;
	}
}

var list = new SinglyLinkedList();
list.push("This will be shifted!");
list.push("Hi!");
list.push("How");
list.push("are");
list.push("you?");
list.push("This will be popped!");
console.log("------Before popping------");
list.traverse();
console.log("Popped value", list.pop());
console.log("------After popping------");
list.traverse();
console.log("Shifted value", list.shift());
console.log("------After shifting------");
list.traverse();
console.log("------After unshifting------");
list.unshift("Adding in the front");
list.traverse();
console.log("-----Get node at index -1, 2 and 100-----");
console.log(list.get(-1));
console.log(list.get(2));
console.log(list.get(100));
console.log("-----Changing value at 0th position-----");
list.set(0, "This is first node");
list.traverse();
console.log("-----Inserting at 0th and last position-----");
list.insert(0, "FIRST");
list.insert(list.getLength(), "LAST");
list.insert(100, "sdbfja");
list.traverse();
console.log("-----Removing at 0th, 2nd and last position-----");
list.remove(0);
list.remove(list.getLength() - 1);
list.remove(100);
list.traverse();
console.log("-----After Reversing-----");
list.reverse();
list.traverse();


/*
	------- Time Complexity -------
	** Insertion O(1). Arrays O(n) if inserted at first or middle.
	** Removal O(1) from begining and O(n) middle and last as we need to traverse. Arrays opposite O(n) and O(1).
	** Searching O(n) for both.
	** Accessing O(n). Array O(1) due to index.
*/
