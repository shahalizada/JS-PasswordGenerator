// //Set up the Passwords
let upperCase = "ABCDEFGHIjKLMNOPQRSTUVWXYZ";
let upperCaseArray = upperCase.split("");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let lowerCaseArray = lowerCase.split("");
let numbers = "0123456789";
let numbersArray = numbers.split("");
let symbols = "!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~";
let symbolsArray = symbols.split("");

//Start Loading;
window.onload = alert(
  "Welcome to Password Generator, Please click 'Generate Password' to start!"
);
//Main Function;
function generatePassword() {
  var allCharacter = [];
  var result = "";

  let totalLength = prompt(
    "How many character would you like your password to be?"
  );
  if (totalLength < 8 || totalLength > 128) {
    alert(
      "It is highly recommended to have passwords more than 8 to 128 characters."
    );
  } else {
    if (
      confirm("Would you like your password to contain upper cases letters?")
    ) {
      Array.prototype.push.apply(allCharacter, upperCaseArray);
    }
    if (
      confirm("Would you like your password to contain lower case letters?")
    ) {
      Array.prototype.push.apply(allCharacter, lowerCaseArray);
    }
    if (confirm("Would you like your password to contain numbers?")) {
      Array.prototype.push.apply(allCharacter, numbersArray);
    }
    if (confirm("Would you like your password to contain symbols?")) {
      Array.prototype.push.apply(allCharacter, symbolsArray);
    }
    if (allCharacter.length === 0) {
      alert(
        "You must choose at least one type of characters to generate passwords"
      );
    } else {
      for (let i = 0; i < totalLength; i++) {
        let random = Math.floor(Math.random() * allCharacter.length);
        result += allCharacter[random];
      }
    }
  }
  document.getElementById("password").innerHTML = result;
}

function copyPassword() {
  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password Copied to Clipboard");
}
