module.exports.favoriteNumber = function(favNum, guessNum) {
	if (favNum > guessNum) {
		return "Too low";
	}
	else if (favNum < guessNum) {
		return "Too high";
	}
	else {
		return "You got it!";
	}
};

module.exports.checkLock = undefined;

module.exports.canIGet = undefined;