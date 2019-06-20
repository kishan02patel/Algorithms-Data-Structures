// Find the largest sum of n consecutive numbers.
function sumNumbers(arr, num) {
	let maxSum = 0, tempSum = 0;

	if (arr.length < num)
		return "Array length is smaller than the number provided."

	// First sum the first n (num) numbers.
	for (let i = 0; i < num; i++)
		tempSum += arr[i];

	maxSum = tempSum;

	// Now add the next array element to the tempSum and subtract the first element of n consecutive sum.
	for (let i = num; i < arr.length; i++) {
		tempSum += arr[i] - arr[i - num];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

console.log(sumNumbers([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));