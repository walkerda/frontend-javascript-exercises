module.exports.sumNumbers = function(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
};

module.exports.splitAndLowerCaseString = function(inputString) {
	return inputString.toLowerCase().split(",");

};

module.exports.addIndex = function(inputData) {
	var outputData = [];
	for (var i = 0, len = inputData.length; i < len; i++) {
	outputData += i + ' is ' + inputData[i];
	}
	console.log(outputData.split());
	return outputData.split();
};
