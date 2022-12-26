function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
  var Name = document.getElementById("uName").value;
  var pass = document.getElementById("password").value;

  
  if (Name == "") {
    printError("nameErr", "please enter your name");
  } else {
    printError("nameErr", "");

  }

  if (pass == "") {
    printError("passErr", "please enter your password");
  } else {
    printError("passErr", "");
  }
}
