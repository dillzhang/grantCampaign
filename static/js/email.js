
var buttonCallback = function(e) {
    var emailer = document.getElementById("email");
    var checker = document.getElementById("checkbox");
    var emptyString = "";
    for (i = 0; i < emailer.value.length; i++) {
	emptyString += " ";
    }

    if (emailer.value != emptyString) {
	emailer.value = "";
	checker.checked = false;
	confirm("Thank you for joining our campaign! You'll be updated.");
    }

}



var button = document.getElementById("signUp");
button.addEventListener("click",buttonCallback);
