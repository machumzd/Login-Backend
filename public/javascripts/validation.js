function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
  var Name = document.getElementById("uName").value;
  var pass = document.getElementById("password").value;
  let usercheck = "Admin";
  let passcheck = 7994;

  if (
    (Name != "" && pass != "" && Name != usercheck) ||
    (Name != "" && pass != "" && pass != passcheck)
  ) {
    printError("logErr", "Wrong Credentials");
  } else {
    printError("logErr", "");
  }

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
