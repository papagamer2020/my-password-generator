// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomCharacter(character) {
  var randomCharacter = character[Math.floor(Math.random() * character.length)];
  return randomCharacter;
}

function generateFourCharacterTypes(case1, case2, case3, case4, passwordLength) {
  var password = [];
 
  while (password.length <= passwordLength) {
    var randomChar1 = generateRandomCharacter(case1);
    var randomChar2 = generateRandomCharacter(case2);
    var randomChar3 = generateRandomCharacter(case3);
    var randomChar4 = generateRandomCharacter(case4);

    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar1);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar2);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar3);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar4);
  }
  return password;
}

function generateThreeCharacterTypes(case1, case2, case3, passwordLength) {
  var password = [];
 
  while (password.length <= passwordLength) {
    var randomChar1 = generateRandomCharacter(case1);
    var randomChar2 = generateRandomCharacter(case2);
    var randomChar3 = generateRandomCharacter(case3);

    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar1);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar2);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar3);
  } 
  return password;
 
}

function generateTwoCharacterTypes(case1, case2, passwordLength) {
  var password = [];
  
  while (password.length <= passwordLength) {
    var randomChar1 = generateRandomCharacter(case1);
    var randomChar2 = generateRandomCharacter(case2);
    
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar1);
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar2);
  } 
  return password;
}

function generateOneCharacterType(case1, passwordLength) {
  var password = [];
  while (password.length <= passwordLength) {
    var randomChar1 = generateRandomCharacter(case1);  
    if (password.length >= passwordLength) {
      break;
    }
    password.push(randomChar1);
  } 
  
  return password;
}

function getCharacterSelection(passwordLength) {
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  
  do {
    // Ask if user wants to include lowercase characters
  var lowerCaseSelection = confirm(
    "Do you want to include lowercase characters?"
  );
  // Ask if user wants to include uppercase characters
  var upperCaseSelection = confirm(
    "Do you want to include uppercase characters?"
  );
  // Ask if user wants to include numeric characters
  var numericCharacterSelection = confirm(
    "Do you want to include numberic characters?"
  );
  // Ask if user wants to include special characters
  var specialCharactersSelection = confirm(
    "Do you want to include special characters?"
  );

  if (
    !lowerCaseSelection &&
    !upperCaseSelection &&
    !numericCharacterSelection &&
    !specialCharactersSelection
  ) {
    alert("You must select at least one character choice!");
  }
  }
  while (
    !lowerCaseSelection &&
    !upperCaseSelection &&
    !numericCharacterSelection &&
    !specialCharactersSelection
  ) 
  
  if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    return generateFourCharacterTypes(lowerCaseAlphabet, upperCaseAlphabet, numbers, specialCharacters, passwordLength);
  } // Password must include lowercase, uppercase and numbers
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    numericCharacterSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, upperCaseAlphabet, numbers, passwordLength);
  } // Password must include lowercase, uppercase and special characters
  else if (
    lowerCaseSelection &&
    upperCaseSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, upperCaseAlphabet, specialCharacters, passwordLength);
  } // Password must include lowercase, numbers, and special characters
  else if (
    lowerCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(lowerCaseAlphabet, numbers, specialCharacters, passwordLength);
  } // Password must include uppercase, numbers, and special characters
  else if (
    upperCaseSelection &&
    numericCharacterSelection &&
    specialCharactersSelection
  ) {
    return generateThreeCharacterTypes(upperCaseAlphabet, numbers, specialCharacters, passwordLength);
  } // Password must include uppercase and lowercase
  else if (upperCaseSelection && lowerCaseSelection) {
   return generateTwoCharacterTypes(upperCaseAlphabet, lowerCaseAlphabet, passwordLength);
  } // Password must include uppercase and numeric
  else if (upperCaseSelection && numericCharacterSelection) {
    return generateTwoCharacterTypes(upperCaseAlphabet, numbers, passwordLength);
  } // Password must include lowercase and numeric
  else if (lowerCaseSelection && numericCharacterSelection) {
    return generateTwoCharacterTypes(lowerCaseAlphabet, numbers, passwordLength);
  } // Password must include uppercase and special character
  else if (upperCaseSelection && specialCharactersSelection) {
    return generateTwoCharacterTypes(upperCaseAlphabet, specialCharacters, passwordLength);
  } // Password must include lowercase and special character
  else if (lowerCaseSelection && specialCharactersSelection) {
    return generateTwoCharacterTypes(lowerCaseAlphabet, specialCharacters, passwordLength);
  } // Password must include special character and numbers
  else if (specialCharactersSelection && numericCharacterSelection) {
   return generateTwoCharacterTypes(specialCharacters, numbers, passwordLength);
  } // Password must include uppercase
  else if (upperCaseSelection) {
   return generateOneCharacterType(upperCaseAlphabet, passwordLength);
  } // Password must include lowercase
  else if (lowerCaseSelection) {
    return generateOneCharacterType(lowerCaseAlphabet, passwordLength);
  } // Password must include special characters
  else if (specialCharactersSelection) {
    return generateOneCharacterType(specialCharacters, passwordLength);
  } // Password must include numbers
  else {
    return generateOneCharacterType(numbers, passwordLength);
  };
  
};

function generatePassword() {
  // Make password between 8 and 128 characters
  var passwordLength;
  do {
    passwordLength = prompt(
      "Please select a length between 8 and 128 characters: "
    );
    passwordLength = parseInt(passwordLength);
  }
  while (passwordLength < 8 || passwordLength > 128)

  var passwordArray = getCharacterSelection(passwordLength);
  var password = passwordArray.join("");
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);