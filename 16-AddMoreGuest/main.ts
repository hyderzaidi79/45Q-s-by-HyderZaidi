let guestList = ["Ali", "Najam", "Kazim","Lubna"];
let guestCantCome = guestList [0];
console.log(guestCantCome, "is not joining us tonight.");
guestList.splice(0, 1, "Muhammad");
console.log("Good News! we have found a bigger table for dinner.");
guestList.unshift("Bilal");
guestList.push("Zubair");
let middleIndex:  number = Math.floor(guestList.length/2);
guestList.splice(middleIndex, 0, "Raheel");
console.log("Updated list of guests");
guestList.forEach(oneByOne => console.log(`Salam, ${oneByOne},would you join us on dinner tonight?`));

let avg = Math.floor(guestList.length/2)
