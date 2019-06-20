function countUnique(arr) {
	let left = 0, right = 1, count = 1;
	if (arr.length === 0)
		return 0;
	while (right < arr.length) {
		if (arr[left] !== arr[right])
			count++;
		left = right;
		right++;
	}
	return count;
}

console.log(countUnique([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 10, 10]))
console.log(countUnique([]))
console.log(countUnique([1, 1, 1, 1, 1, 1]))
console.log(countUnique([1, 2]))