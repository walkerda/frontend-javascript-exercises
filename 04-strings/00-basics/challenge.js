module.exports.formLetter = function(firstName, senderName, message) {

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {

};

module.exports.findFirstMatch = function(text, searchString) {
<<<<<<< Updated upstream

};

module.exports.findLastMatch = function(text, searchString) {

};

module.exports.substringBetweenMatches = function(text, searchString) {

=======
	return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	return text.substring(text.lastIndexOf(searchString), 10) + 
		text.substring(text.lastIndexOf(searchString), 13);
>>>>>>> Stashed changes
};