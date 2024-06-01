"use strict";
//run forEach in array through function
function show_magicians(magicians) {
    magicians.forEach(one_magi => console.log(one_magi));
}
//mapping all elements indivisually and save
function make_great(magicians) {
    return magicians.map(one_magi => `The great ${one_magi}`);
}
//creating array
let magicians_name = ["James", "Clare", "Rithik", "Tom"];
//creat variable and call mapped array through function
let great_magicians = make_great(magicians_name);
//print the results
show_magicians(magicians_name);
show_magicians(great_magicians);
