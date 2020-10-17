
//Various Arrays
var generateBtn = document.querySelector("#generate");

//FUNCTIONS
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array
}

function generatePassword() {
  var pasword = ""
  var length = prompt("What is your pasword size(it must be from 8-128 characters")
 
  //values for lowercase, uppercase, numeric and specialcharacters
  var lowercasevalues = "abcdefghijklmnopqrstuvwxyz".split("")
  console.log(lowercasevalues)
  var uppercasevalues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numericvalues = "123456789".split("")
  var specialcharacters = `!"#$%&'()*+,-./:;<=>?@[^_{|}~"`.split("")

  //If length of pasword is lower than 8 or greater than 128, alert "invalid entry, pasword need to be 8-128characters"
  if (length < 8 || length > 128) {
    alert("invalid entry,pasword need to be 8-128 characters")
  }
  //We ask yes or no questions to users, they want to use ("lowercase, uppercase, numeric or specialcharacters")
  else {
    islowercase = confirm("Do you confirm lowercase?")
    isUpperCase = confirm("Do you confirm uppercase?")
    isNumeric = confirm("Do you confirm numeric")
    isSpecialCharacters = confirm("Do you confirm SpecialCharacter?")
  }
  //Make an array where I can combine the different ramdom 
  var possibleArray= []
     var indexlowercase = Math.floor(Math.random()*lowercasevalues.length)  
      if (islowercase){
        possibleArray = possibleArray.concat(lowercasevalues)
      }
      var indexuppercase = Math.floor(Math.random()*uppercasevalues.length)
       if (isUpperCase){
        possibleArray = possibleArray.concat(uppercasevalues)
         
       }
       var indexnumeric = Math.floor(Math.random()*numericvalues.length)
       if (isNumeric){
        possibleArray = possibleArray.concat(numericvalues)
        
       }
       var indexspecialcharacters = Math.floor(Math.random()*specialcharacters.length)
       if (isSpecialCharacters){
        possibleArray = possibleArray.concat(specialcharacters)
        
       }
       console.log("hopefullyfullcontainer",possibleArray)
       var finalPassword = []
        var solution = shuffle(possibleArray)
        for (var i = 0; i<length; i++ ){
          finalPassword.push(solution[i])
        }
       return finalPassword.join("")}

    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
      
