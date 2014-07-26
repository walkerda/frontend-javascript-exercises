module.exports.addItem = function(item, array) {
	var lastElementIndex = array.length - 1;

	if (array[lastElementIndex] === item ) {
		return array;
	}
	else {
		array.push(item);
		return array;
	}

};

module.exports.reverseSortedList = function(array) {
	array.sort();
	array.reverse();
	return array;
};