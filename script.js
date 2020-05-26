// This function takes a boolean parameter
// that says if password was entered correctly
// (true = yes, false = no)
function logIn(passwordIsCorrect) {
    if (passwordIsCorrect != true) {
        console.log("Your password is not correct, you can't log in");
    } else {
        console.log("Welcome back! You are now signed in."); // else statement was missing, thus sign in was laways executed
    }
}

function litersToGallons(liters) {
    var reslut = liters / 3.785;
    var message = liters.toString() + " liters are " + result.toString() + " gallons.";
    console.log(message); // console was written with upper case letter
}

function isGreatherThan10(number) {
    if (number > 10) {
        return "The number is greater than 10.";
    } else if (number == 10) {
        return "The number is 10.";
    } else {
        return "The number is smaller than 10.";
    }
}