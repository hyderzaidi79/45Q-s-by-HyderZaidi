// creating an Array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using forOf-loop
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var one_num = number_1[_i];
    var OrdinalEnding = void 0;
    if (one_num === 1) {
        OrdinalEnding = "st";
    }
    else if (one_num === 2) {
        OrdinalEnding = "nd";
    }
    else if (one_num === 3) {
        OrdinalEnding = "rd";
    }
    else {
        OrdinalEnding = "th";
    }
    console.log("".concat(one_num).concat(OrdinalEnding));
}
;
