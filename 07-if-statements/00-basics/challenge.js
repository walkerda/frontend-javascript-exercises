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

module.exports.canIGet = function(item, money) {
	if ((item === "Apple Sticker") && (money >= 1)) {
		return true;
	}
	else if ((item === "MacBook Air") && (money > 998)) {
		return true;
	}
	else if ((item === "MacBook Pro") && (money > 1298)) {
		return true;
	}
	else if ((item === "Mac Pro") && (money > 2498)) {
		return true;
	}	
	else {
		return false;
	}
};