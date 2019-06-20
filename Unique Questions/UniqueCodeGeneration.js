/*
	This problem is about generating a unique code that can identify store number as well as transaction number and the date that transaction took place. This can be used by stores to generate a promo code. There can be 200 stores and maximum of 10000 transactions each day at any store. The constraint is that promo code can be of max 9 characters and easy to use. 

	** To reduce the length of code I am mapping numbers to characters.
	** Like 1 -> 'a'
			26 -> 'z'
			27 -> 'aa' 
			and so on.
*/

// This object will store number to character mapping.
let charData = {};

// This object will store character to number mapping for reversing.
let reverse = {};

// Function that will generate key value pairs of numbers to characters.
function mapNumbersAndChars() {
	// After each iteration of the inner most loop we need to add a character on the front. 
	let prevCode = '';

	// After each iteration of the inner loop we need to add a character on the front. 
	let prePrevCode = '';

	// The code generated for present number.
	let code = '';

	/* 
		** This loop will keep generating and increasing code based on number
		** On first iteration it will go from 'a' to 'z'
		** Next iteration from 'aa' to 'az' then 'ba' to 'bz' till 'zz'
		** Next iteration from 'aaa' to 'zzz'.
	*/
	for (let x = 1, k = 1; x <= 26; x++) {
		for (let i = 1; i <= 26; i++) {
			for (let j = 1; j <= 26; j++) {

				// generate the code based on number of iterations
				code = prePrevCode + prevCode + String.fromCharCode(96 + j);

				// Save number as key and code as value
				charData[k] = code;

				// Save code as key and number as value 
				reverse[code] = k;

				k++;
			}
			// Increase the previous code i.e. initially empty then 'a' then after iteration 'b' 
			prevCode = String.fromCharCode(96 + i);
		}
		// Increase the pre-previous code i.e. initially empty then 'a' then after iteration 'b' 
		prePrevCode = String.fromCharCode(96 + x);
	}
}


function generateShortCode(storeId, transactionId) {

	/*
		** To make it confusing and irregular pattern for cheaters we jumble the sequence. 
		** Date - storeId - Month - transactionId
		** We first store just the date and then store id then the month and then transaction id.
		** To distinguish each part during decoding we alternate lowercase and uppercase because date can even be represented as single character ( like 5 will map to 'e').
	*/
	const date = new Date();
	const code = charData[date.getDate()] + charData[storeId].toUpperCase() + charData[date.getMonth()] + charData[transactionId].toUpperCase();
	return code;
}

function decodeShortCode(shortCode) {

	// Split the code based on uppercase.
	const split = shortCode.split(/([A-Z]+)/);

	// Get the store id from reversed object.
	const storeId = reverse[split[1].toLowerCase()];

	// Get the transaction id.
	const transactionId = reverse[split[3].toLowerCase()];

	// Create the date object and set the date and month.
	const shopDate = new Date();
	shopDate.setDate(reverse[split[0]]);
	shopDate.setMonth(reverse[split[2]]);

	return {
		storeId,
		shopDate: shopDate.toDateString(),
		transactionId
	};
}

mapNumbersAndChars();
const code = generateShortCode(199, 9999);
console.log(code);
console.log(decodeShortCode(code));

/*
	** We can even add logic to make all the code of exact length(8 or 9) by adding pseudo numbers which will serve no purpose and can be removed during decoding.
	** Like if the date is between 1 to 26 it will generate single character between 'a' to 'z'. So we can add if condition and add a number just to make it fixed size of 2.
*/