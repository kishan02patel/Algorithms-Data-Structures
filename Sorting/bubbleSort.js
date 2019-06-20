function swap(arr, i, j) {
	// New ES6 syntax
	[arr[i], arr[j]] = [arr[j], arr[i]];

	// let temp = arr[i];
	// arr[i] = arr[j];
	// arr[j] = temp;
}

function bubbleSort(arr) {
	let noSwap = true;
	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		// Making it more efficient. No need to check the last values as they would be the highest.
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwap = false;
			}
		}
		if (noSwap)
			break;
	}
	return arr;
}


console.log(bubbleSort([5, 3, 8, 1, 0, 2, 4, 7, 10, 9]));

// For nearly sorted array noSwap variable is helpful as if a swap didn't take place then it means that array is sorted and its no longer need to make any further comparisions.
console.log(bubbleSort([5, 1, 2, 3, 4, 6, 7]));


// Worst and average case Time complexity is O(n2)
// Best case O(n)
// Space complexity O(1)
// But if the array is nearly sorted and if we optimised the sort then it is almost O(n)