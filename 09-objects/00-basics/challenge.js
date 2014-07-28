module.exports.createCourse = function(title, duration, students) {
	// var course = {
	// 	title: title,
	// 	duration: duration,
	// 	students: students
	// };

	// return course;

	var course = {};
	course.title = title;
	course.duration = duration;
	course.students = students;
	
	return course; 
};

module.exports.addProperty = function(object, newProp, newValue) {
	//object[newProp] = newValue;
	//bracket notation works...?

	//object.newProp = newValue;
	//why doesn't dot notation work???
	
	var newObject = object;
	newObject[newProp] = newValue;

	return newObject;
};

module.exports.formLetter = function(letter) {
	var letterInfo = {
		recipient: letter.recipient,
		sender: letter.sender,
		msg: letter.msg
	};

	var letterStr = 'Hello ' + letterInfo.recipient + ',\n\n' + letterInfo.msg + '\n\nSincerely,\n' + letterInfo.sender;

	return letterStr;
};

module.exports.canIGet = function(item, money) {
	var priceTable = {};


<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
