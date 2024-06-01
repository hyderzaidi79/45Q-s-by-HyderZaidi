// creating array
let username = ["anwer","king01","sweetpearl","moin2","admin"];
// using forEach loop on Array
username.forEach(user =>{
   if (user === "sweetpearl"){
    console.log(`Hello! ${user},would you like to see your status report?`)
   } else {
   console.log(`Hello!, ${user}, thank you for logging in again.`)
   }});