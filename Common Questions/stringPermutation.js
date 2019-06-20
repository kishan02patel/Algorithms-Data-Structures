// String permutation or string anagrams. Same characters but jumbled.

function stringPermutation(firstString, secondString, caseInsensitive) {

	if (firstString.length !== secondString.length)
		return false;

	// Convert the strings to lowercase for case in-sensitive checking.
	if (caseInsensitive) {
		firstString = firstString.toLowerCase();
		secondString = secondString.toLowerCase();
	}

	let firstChars = {};

	// Iterate through each character in the firstString to count the occurance of each character.
	for (let char of firstString) {

		// Check if that character already exists in the object or not. If exists then increase the count.
		if (!firstChars.hasOwnProperty(char))
			firstChars[char] = 1;
		else
			firstChars[char]++;
	}

	for (let char of secondString) {

		//Check if the character doesn't exist in first string or if that character's count value is down to 0.
		if (!firstChars[char])
			return false;
		else
			firstChars[char]--;
	}

	return true;
}

const firstStr = "Kishan";
const secondStr = "nahsik";
console.log(stringPermutation(firstStr, secondStr, true));

// Time Complexity O(n)