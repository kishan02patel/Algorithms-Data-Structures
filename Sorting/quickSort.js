function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		quickSort(arr, left, pivotIndex);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length) {
	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
}

console.log(quickSort([100, -5, 14, 5, 1, -3, 45, 18]));

// Best and average case time complexity O(n log n)
// Worst case O(n2)
// Space Complexity O(log n)