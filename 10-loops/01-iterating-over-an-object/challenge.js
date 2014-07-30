module.exports.getKeys = function(object) {
	for (var property in object) {
		console.log(property + object[property]);
		return property + object[property];
	}
};

module.exports.getValues = function() {

};

module.exports.objectToArray = function() {

};