// creating Name as variable
var Name = "Muhammad ali";
//print Name in Upper case
console.log(Name.toUpperCase());
// print Name in Lower Case 
console.log(Name.toLowerCase());
// print namein Title Case
console.log(Name.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
