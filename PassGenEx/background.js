chrome.browserAction.onClicked.addListener(function (tab) {
  var passwordLength = prompt("Enter password length:");
  if (passwordLength == null || passwordLength == "") {
    return;
  }
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8) {
    alert("Password length must be a number greater than or equal to 8.");
    return;
  }
  var password = generatePassword(passwordLength);
  copyToClipboard(password);
  alert("Password copied to clipboard: " + password);
});

function generatePassword(length) {
  var allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  var password = new Array(length);
  for (var i = 0; i < length; i++) {
    password[i] = allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  return password.join("");
}

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
}