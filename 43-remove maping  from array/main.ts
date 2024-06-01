// console.log("\nsecond task: Call poets name from array through function")
let show_poets = (poets:string[])=>{
        poets.forEach(one_poet => console.log(one_poet));
        
};
let great_poets = (poets:string[])=>{
     return poets.map(one_poet => `The Great ${one_poet}`);
};
let poets_name = ["Iqbal","Faraz","Qasmi","Jalib","Qamar"];
//making shallow copy of original array by .slice()
let copy_poets_names = poets_name.slice();

let copy_great_poets = great_poets (copy_poets_names);
//original
show_poets(copy_poets_names)
//mapped array with "the great"
show_poets(copy_great_poets)

// show_poets(copy_great_poets_name)