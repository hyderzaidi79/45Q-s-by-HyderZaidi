var guestList = ["Ali", "Najam", "Kazim", "Lubna"];
var guestCantCome = guestList[0];
console.log(guestCantCome, "is not joining us tonight.");
guestList.splice(0, 1, "Muhammad");
console.log("Good News! we have found a bigger table for dinner.");
guestList.unshift("Bilal");
guestList.push("Zubair");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Raheel");
console.log("Updated list of guests");
guestList.forEach(function (oneByOne) { return console.log("Salam, ".concat(oneByOne, ",would you join us on dinner tonight?")); });
console.log("Sorry, bigger table in not available on time.Therefore, we are apologizing and inviting only two people at all.");
while (guestList.length > 2) {
    var RemovedGuest = guestList.pop();
    console.log("Salam, ".concat(RemovedGuest, ", sorry for inconvinience, I am not inviting you at dinner)"));
}
console.log("invitatioin to the last to guest");
guestList.forEach(function (lastTwo) { return console.log("Luckily, ".concat(lastTwo, ", you are still invited")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
