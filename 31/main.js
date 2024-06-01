"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = ["Ali", "Asad", "Bashir", "David", "admin"];
// userName = []
if (userName.length === 0) {
    console.log(`Your array is empty, We need to find some users!`);
}
else {
    userName.forEach(oneUser => {
        if (oneUser === "admin") {
            console.log(`Hello! ${oneUser}, would you like to view your status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging again!`);
        }
    });
}
