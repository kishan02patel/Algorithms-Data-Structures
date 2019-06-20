function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	let sum = 0;
	while (left < right) {
		sum = arr[left] + arr[right];
		if (sum === 0)
			return [arr[left], arr[right]];
		else if (sum > 0)
			right--;
		else
			left++;
	}
	// return undefined;
	return [];
}

console.log(sumZero([-5, -3, -2, -1, 0, 2, 4, 6, 8]));