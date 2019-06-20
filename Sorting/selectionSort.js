// It is opposite of the bubble sort. Here we move the smallest value to the front.

function selectionSort(arr) {
	let min = 0, j = 0;
	for (let i = 0; i < arr.length; i++) {
		min = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min])
				min = j;
		}
		if (i !== min)
			[arr[i], arr[min]] = [arr[min], arr[i]];
	}

	return arr;
}

console.log(selectionSort([3, 1, 5, 2, 6]));

// All case Time Complexity O(n2)
// Space complxity O(1)
