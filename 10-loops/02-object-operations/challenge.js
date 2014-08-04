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

    for (var key in array) {
        if (object[array[key]] === undefined) {
            return false;
        }
    }
    return true;
};