module.exports.stream = function(conditionalFn, actionFn) {
	
	while (conditionalFn()) {
		actionFn();
	}
};

module.exports.sumNumbers = function(array) {
	var i = 0;
	var total = 0;
	while (i < array.length) {
		total += array[i];
		i++;
	}
	return total;

};



