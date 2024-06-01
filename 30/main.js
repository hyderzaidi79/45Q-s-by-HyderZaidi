// creating array
var username = ["anwer", "king01", "sweetpearl", "moin2", "admin"];
// using forEach loop on Array
username.forEach(function (user) {
    if (user === "sweetpearl") {
        console.log("Hello! ".concat(user, ",would you like to see your status report?"));
    }
    else {
        console.log("Hello!, ".concat(user, ", thank you for logging in again."));
    }
});
