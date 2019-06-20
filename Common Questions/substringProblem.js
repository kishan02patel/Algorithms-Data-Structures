function substringSearch(str, pattern) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (str[i + j] !== pattern[j])
				break;
			if (j === pattern.length - 1)
				count++;
		}
	}
	return count;
}

console.log(substringSearch("lorie loled loler lols", "lol"));

// Time complexity seems to be O(m*n) where m and n are length of the strings.