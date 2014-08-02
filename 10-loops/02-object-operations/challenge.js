module.exports.copy = function(object) {
	var newObject = {};
	for (var key in object) {
		newObject[key] = object[key];
	}
	return newObject;
};

module.exports.extend = function(dest, src) {
	for (var prop in src) {
     dest[prop] = src[prop];
   }
	return dest;
};

module.exports.hasElems = function(object, array) {
	var newObject = {};

	for (var key in array) {
		newObject[key] = array[key];
	}
	console.log(newObject[key]);
	console.log(newObject[key] === object[key]);
	return newObject[key] === object[key];

};