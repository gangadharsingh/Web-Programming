function submit() {
	var name = document.getElementById("name").value;
	var comment = document.getElementById("comment").value;
	if (validation(name, comment)) {
		document.getElementById("submit").submit();
		document.write(comment+"<br/");
		document.write("<h6>"+name+"</h6>");
	}
}

function validation(name, comment) {
	if (name = '' && comment = '') {
		alert("Please fill the form");
		return false;
	} else {
		return true;
	}
}