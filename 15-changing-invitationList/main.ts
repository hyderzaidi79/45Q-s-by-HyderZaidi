let guestList = ["Ali", "Najam", "Kazim","Lubna"];
let guestCannotCome = guestList[0]; 
console.log(guestCannotCome, "is not joining us tonight.");
guestList.splice(0, 1, "Muhammad");
guestList.forEach(frind => console.log(`Hello! ${frind}, would you dinner with us?`));
