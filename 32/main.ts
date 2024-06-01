let Current_users = ["Ali","Asad","Bashir","david","admin"];

let New_users = ["Amjad","asad","Kashif","David","admin"];

New_users.forEach(new_one_user=>{
    let our_condition = Current_users.some(Current_0ne_user=> Current_0ne_user.toLowerCase() === new_one_user.toLowerCase() );
    if (our_condition){
        console.log(`Sorry! ${new_one_user} is already taken.`)
    } else {
        console.log(`This Username ${new_one_user} is available`);
    }
})