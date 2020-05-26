function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    var message = celsius + " degrees Celsius are " + fahrenheit.toString() + " degrees Farenheit";
    return message;
}

function gallonsToLiters(gallons) {
    var liters = gallons / 3.78541;
    return gallons.toString() + " gallons are equal to " + liters.toString() + " liters";
}

function bmi(cms, kgs) {
    var bmi = (kgs / Math.pow((cms / 100), 2));
    var text1 = "With an height of ";
    var text2 = " cms and a weight of ";
    var text3 = " kgs, the BMI equals : ";
    return text1 + cms.toString() + text2 + kgs.toString() + text3 + Math.round(bmi).toString();
}

console.log(celsiusToFahrenheit(23));
console.log(celsiusToFahrenheit(-45.3));
console.log(celsiusToFahrenheit(0));
console.log(gallonsToLiters(window.prompt("How many gallons ")));
console.log(bmi(183, 70));