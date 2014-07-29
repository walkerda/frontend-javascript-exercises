module.exports.createCourse = function(title, duration, students) {
	//OPTION 1
	// var course = {
	// 	title: title,
	// 	duration: duration,
	// 	students: students
	// };

	// return course;

	//OPTION 2
	var course = {};
	course.title = title;
	course.duration = duration;
	course.students = students;
	
	return course; 
};

module.exports.addProperty = function(object, newProp, newValue) {
	//OPTION 1
	//object[newProp] = newValue;

	//object.newProp = newValue;
	//why doesn't dot notation work???
	
	//OPTION 2
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
	var cost = {
		item: item,
		amount: money
	};

	console.log(Boolean(cost));
	
	return Boolean(cost);
};