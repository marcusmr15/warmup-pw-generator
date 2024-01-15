var button = document.getElementById("button");


button.addEventListener("click", function() {
    var response = prompt('Please select an option: \n1. Option 1 \n2. Option 2 \n3. Option 3');

switch (response) {
  case '1':
    console.log('fukc');
    break;
  case '2':
    // Perform actions for Option 2
    break;
  case '3':
    // Perform actions for Option 3
    break;
  default:
    // Handle invalid response
    break;
}
    
    //var userInput = prompt("Password criteria:\n1. select 1\n2. select 2\n3. select 4");

    //if (userInput === null) {
      //console.log("No message inputted.");
    //} else if (userInput === '') {
      //console.log("You need to type something...");
    //} else if (typeof userInput === "string") {
      //console.log("User entered:", userInput);
    //}
});




