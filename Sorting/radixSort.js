function getDigits(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0)
		return 1;

	//return ('' + num).length;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
	let maxDigits = 0;
	arr.forEach(num => maxDigits = Math.max(maxDigits, digitCount(num)));
	return maxDigits;
}

function radixSort(arr) {
	let maxLength = mostDigits(arr);
	for (let k = 0; k < maxLength; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < arr.length; i++) {
			let digit = getDigits(arr[i], k);
			digitBuckets[digit].push(arr[i]);
		}
		arr = [].concat(...digitBuckets);
	}
	return arr;
}

console.log(radixSort([23, 345, 5476, 12, 2345, 9852]));

// All case time complexity O(n * k)
// If all numbers are unique then O(n log n).
// n -  length of array and k is number of digits in a number
// Space Complexity O(n + k)