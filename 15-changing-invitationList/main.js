var guestList = ["Ali", "Najam", "Kazim", "Lubna"];
var guestCantCome = guestList[0];
console.log(guestCantCome, "is not joining us tonight.");
guestList.splice(0, 1, "Muhammad");
guestList.forEach(function (frind) { return console.log("Hello! ".concat(frind, ", would you dinner with us?")); });
