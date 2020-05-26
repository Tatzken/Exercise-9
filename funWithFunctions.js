// A Function to greet, talk and say goo bye to a certain person
function converse(name) {
    console.log("Hello ", name);
    console.log("It is windy today, take a jacket with you.");
    console.log("Good Bye ", name);
}

function add(num1, num2) {
    return num1 + num2;
}

function greeter(name) {
    return "Bienvenue chez nous, " + name;
}

function converter(celsius) {
    return (celsius * 9 / 5) + 32;
}


converse("Jim");
converse("Tim");
converse("Kim");

console.log(add(1234, 324535));
console.log(greeter("Jimmy"));

console.log(converter(21.5));
console.log(converter(-7));
console.log(converter(11));
console.log(converter(0));