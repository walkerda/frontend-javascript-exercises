module.exports.getKeys = function(object) {
	
	var keys = [];
	for (var key in object) {
		keys.push(key);
		console.log(keys);
	}
	return keys;
};

module.exports.getValues = function(object) {
	var values = [];
	for (var value in object) {
		values.push(object[value]);
		console.log(values);
	}
	return values;
};

module.exports.objectToArray = function(object) {
	var result = [];
	for (var key in object) {
		result.push(key + " is " + object[key]);
	}
	console.log(result);
	return result;

};