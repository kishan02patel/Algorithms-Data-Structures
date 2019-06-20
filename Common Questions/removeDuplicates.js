function removeDuplicates(arr) {
	let uniqueValues = {};

	// Iterate through each value in the array.
	arr.forEach(item => {

		// Check if that value already exists in the object or not.
		if (!uniqueValues.hasOwnProperty(item))
			// Assisgn each item in object to its own value. Eg : {'11': 11, '12': 12}. This is done because keys are stored as objects.
			uniqueValues[item] = item;
	})

	// Returns an array with all the values present in the object.
	return Object.values(uniqueValues);
}

var dupArr = [12, 11, 12, 21, 41, 43, 21];

console.log(removeDuplicates(dupArr));

// Time Complexity is O(n)