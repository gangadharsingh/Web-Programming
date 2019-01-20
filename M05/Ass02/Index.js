var quiz = {
	"questions" : [
	{
		"question": "Each computer hasa built-in instructor set that it knows how to execute by design.",
		"option" : [
		{
			text: "True",
			isCorrect : true,
			feedback: "Correct"
		},
		{
			text: "False",
			isCorrect : false,
			feedback: "Incorrect"
		}
		],
		"hint":"Recall that we use the term computation to mean. The execution of a sequence of instructions by a compiler with intention of solving a given problem.",
	},
	{
		"question": "The computer uses intelligence to execute instructions.",
		"option" : [
		{
			text: "True",
			isCorrect : false,
			feedback: "Incorrect"
		},
		{
			text: "False",
			isCorrect : true,
			feedback: "Correct"
		}
		],
		"hint" : "Recall that we said a computer executes the instructions given to it mechanically."
	}
	]
}

var i = 0;
var j = 0;
window.onload = function display() {
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value="option 1" onclick="radioclicked('+i+','+j+')">'+quiz.questions[i].option[j].text+'<br>'
													+'<input type = "radio" name = "q1" value="option 2" onclick="radioclicked('+i+','+j+1+')">'+quiz.questions[i].option[j+1].text+'<br>';
	hideButton('Prev')
};
function radioclicked(i, j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'+'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
		document.getElementById('feedback 1').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'+'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
		document.getElementById('feedback 1').innerHTML = code
	}
}
function prev() {
	i--;
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value="option 1" onclick="radioclicked('+i+','+j+')">'+quiz.questions[i].option[j].text+'<br>'
													+'<input type = "radio" name = "q1" value="option 2" onclick="radioclicked('+i+','+j+1+')">'+quiz.questions[i].option[j+1].text+'<br>'
	if (i == 0) {
		hideButton('Prev');
	}
}
function next() {
	i++;
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value="option 1" onclick="radioclicked('+i+','+j+')">'+quiz.questions[i].option[j].text+'<br>'
													+'<input type = "radio" name = "q1" value="option 2" onclick="radioclicked('+i+','+j+1+')">'+quiz.questions[i].option[j+1].text+'<br>'
	if (i == quiz.questions.length - 1) {
		hideButton('Next');
	}
}

function hideButton(id) {
	// body...
	console.log(document.getElementById(id).style.visibility);
	document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
	// body...
	console.log(document.getElementById(id).style.visibility);
	document.getElementById(id).style.visibility = 'visible';
}
function reset() {
	location.reload();
}