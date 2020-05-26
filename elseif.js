var a = -10;
var b = -9;
var c = b - a;
if (c > 0) {
    console.log("a was smaller than b")
} else if (c == 0) {
    console.log("a equals b")
} else {
    console.log("a was bigger than b")
}



if (a > 0 && b > 0) {
    console.log("both numbers are greater than 0");
} else if (a > 0 || b > 0) {
    console.log("at least one of the numbers is greater than 0");
} else {
    console.log("none of the numbers is greater than 0");
}