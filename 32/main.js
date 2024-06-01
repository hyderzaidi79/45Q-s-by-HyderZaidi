var Current_users = ["Ali", "Asad", "Bashir", "david", "admin"];
var New_users = ["Amjad", "asad", "Kashif", "David", "admin"];
New_users.forEach(function (new_one_user) {
    var our_condition = Current_users.some(function (Current_0ne_user) { return Current_0ne_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry! ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
