module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString, "red");
};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString, "red");
};

module.exports.substringBetweenMatches = function(text, searchString) {
	return text.substring(text.indexOf(searchString, text.indexOf(searchString)));
};