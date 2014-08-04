module.exports.createCourse = function(title, duration, students) {
	//OPTION 1
	// var course = {
	// 	title: title,
	// 	duration: duration,
	// 	students: students
	// };

	// return course;

	//OPTION 2
	// var course = {};
	// course.title = title;
	// course.duration = duration;
	// course.students = students;
	
	// return course; 

	//OPTION 3
	var Course = function() {
		this.title = title;
		this.duration = duration;
		this.students = students;
	};
	var x = new Course();
	return x;
};

module.exports.addProperty = function(object, newProp, newValue) {
	//OPTION 1
	//object[newProp] = newValue;

	//object.newProp = newValue;
	//why doesn't dot notation work???
	
	//OPTION 2
	// var newObject = object;
	// newObject[newProp] = newValue;

	// return newObject;

	//OPTION 3
	object[newProp] = newValue;
	return object;
};

module.exports.formLetter = function(letter) {

	var letterStr = 'Hello ' + letter.recipient + ',\n\n' + letter.msg + '\n\nSincerely,\n' + letter.sender;

	return letterStr;
};

module.exports.canIGet = function(item, money) {
	var thing = {
		"MacBook Air": 999,
		"MacBook Pro": 1299,
		"Mac Pro": 2499,
		"Apple Sticker": 1
	};

	return thing[item] <= money;
	
};