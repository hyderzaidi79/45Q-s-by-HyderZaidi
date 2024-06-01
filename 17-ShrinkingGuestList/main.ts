//creat a guest list in variable
let guestList = ["Ali", "Najam", "Kazim","Lubna"];
//creat a variableto mark guest at index (0) in list 
let guestCantCome = guestList [0];
//print name of guest who willnot come by calling variable and statement 
console.log(guestCantCome, "is not joining us tonight.");
// replacing  index 0 guest name from list by using splice command 
guestList.splice(0, 1, "Muhammad");
//print a text statement
console.log("Good News! we have found a bigger table for dinner.");
//edit guest list adding new guest name at startof list
guestList.unshift("Bilal");
//edit one more guest name in at the end of guest list
guestList.push("Zubair");
//creating mid of list position to add a further guest name  in guest list
let middleIndex:  number = Math.floor(guestList.length/2);
//adding new guest nameat middleindex
guestList.splice(middleIndex, 0, "Raheel");
//print
console.log("Updated list of guests");
//
guestList.forEach(oneByOne => console.log(`Salam, ${oneByOne},would you join us on dinner tonight?`));
console.log("Sorry, bigger table in not available on time.Therefore, we are apologizing and inviting only two people at all."); 
while(guestList.length >2 ) {
let RemovedGuest = guestList.pop();
console.log(`Salam, ${RemovedGuest}, sorry for inconvinience, I am not inviting you at dinner)`);
}
console.log("invitatioin to the last to guest");
guestList.forEach(lastTwo => console.log(`Luckily, ${lastTwo}, you are still invited`));
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
