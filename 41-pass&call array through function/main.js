"use strict";
console.log("first task: Call magicians name from array through function ");
//run forEach() method of array in dynamic funtion
let show_magicians = (magicians) => {
    magicians.forEach(one_magi => console.log(one_magi));
};
//creat an array
let magician_name = ["Umar", "Talha", "Karan", "Rahul"];
//call array in  dynamic function
show_magicians(magician_name);
console.log("\nsecond task: Call poets name from array through function");
let show_poets = (poets) => {
    poets.forEach(one_poet => console.log(one_poet));
};
show_poets(["Iqbal", "faraz", "qasmi", "jalib", "qamar"]);
