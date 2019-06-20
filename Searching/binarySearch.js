function binarySearch(arr, item) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		middle = Math.floor((start + end) / 2);
		if (arr[middle] === item)
			return middle;
		else if (item < arr[middle])
			end = middle - 1;
		else
			start = middle + 1;
	}

	return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 13));
console.log(binarySearch(arr, 19));
console.log(binarySearch(arr, 0));
console.log(binarySearch(arr, 100));

/*
	------Binary Search-----

	** Condition is array must be sorted.
	** Worst and average case Time Complexity O(log n)
	** Best case O(1)
*/

/*
	------Linear Search-----

	** Worst and average case Time Complexity O(n)
	** Best case O(1)
*/