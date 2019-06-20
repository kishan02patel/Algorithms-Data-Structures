function insertionSort(arr) {
	for(let i = 1; i < arr. length; i++) {
		let currentVal = arr[i];
		for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([2,1,9,76,4]));

// Worst and average case Time complexity is O(n2)
// Best case is O(n)
// Space complexity is O(1)
// For almost sorted array or scenario where data is coming one by one then it is very good because the array will be always sorted and we just need to add the new number.