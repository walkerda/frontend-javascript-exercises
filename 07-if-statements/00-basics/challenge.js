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

module.exports.checkLock = function(num1, num2, num3, num4) {
	if (((num1 === 3) || (num1 === 5) || (num1 === 7)) && (num2 === 2) && 
		((num3 >=5) && (num3 <= 100)) && ((num4 < 9) || (num4 > 20))) {
		return "correct";
	}
	else {
		return "incorrect";
	}
};

module.exports.canIGet = undefined;