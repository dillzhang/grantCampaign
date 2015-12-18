
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
    
};

var buttonCallBack2 = function(e){
    confirm("You're funny, now go donate to a real cause if you have so much extra money");
};

var button = document.getElementById("signUp");
button.addEventListener("click",buttonCallback);

var button2 = document.getElementById("donate");
button2.addEventListener("click",buttonCallBack2);


    