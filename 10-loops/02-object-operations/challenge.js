module.exports.copy = function(object) {
	var newObject = {};
	for (var key in object) {
		newObject[key] = object[key];
	}
	return newObject;
};

module.exports.extend = function(dest, src) {
	for (var prop in dest) {
			src[prop] = dest[prop];
		}
	console.log(dest);
	return dest;
};

module.exports.hasElems = function(object, array) {

};