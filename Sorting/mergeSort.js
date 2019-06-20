function merge(arr1, arr2) {
	let results = [], i = 0, j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i])
			i++;
		}
		else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}

function mergeSort(arr) {
	if (arr.length <= 1)
		return arr;

	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

console.log(mergeSort([10, 24, 12, 76, 1, 50, 48, 2]));

// All case Time complexity O(n log n)
// Space complexity O(n)


