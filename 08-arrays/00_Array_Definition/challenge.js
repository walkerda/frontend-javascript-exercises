module.exports.newArray = function(w,x,y,z) {
	return [w, x, y, z];

};

module.exports.firstAndLast = function(array) {
	var lastElementIndex = array.length - 1;
	return [array[0], array[lastElementIndex]];
};
