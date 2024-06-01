//define variable
var apple = "apple";
var UpperCaseApple = "APPLE";
//Test for equality and ineqality with string
console.log("Is apple is equal to apple?");
console.log(apple == apple);
console.log("Is apple is not equal to apple?");
console.log(apple != apple);
//Test equality and ineqality using lowerCase Function
console.log("\nIs APPLE is equal to apple after converting to lowerCase?");
console.log(UpperCaseApple.toLowerCase() == apple);
console.log("\nIs APPLe is not equal to apple after converting to lowerCase?");
console.log(UpperCaseApple.toLowerCase() != apple);
//Test using equality and inequality, greater than less than,greater than or equal to and less or equal to while using numerals
var ten = 10;
var twenty = 20;
//numeric test
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log("\nIs ten is greater than twenty?");
console.log(10 > 20);
console.log("\nIs ten is greater than or equal to twenty?");
console.log(10 >= 20);
console.log("\nIs ten is smaller than or equal to twenty?");
console.log(10 <= 20);
var fruits = ["orange", "pear", "banana", "melon"];
console.log(fruits);
var a = fruits[0];
console.log("\nIs a==orange");
console.log(a == "orange");
