module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	console.log(text.substring(text.substring(text.lastIndexOf(searchString))));
	return text.substring(text.substring(searchString, text.indexOf(searchString))) +
		text.substring(searchString, text.lastIndexOf(searchString));
};
