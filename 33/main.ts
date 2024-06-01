// creating an Array
let number = [1,2,3,4,5,6,7,8,9];
// using forOf-loop
for(let  one_num of number){
    let OrdinalEnding: String ;
    if(one_num === 1){
        OrdinalEnding = "st"
    } else if(one_num === 2){
        OrdinalEnding = "nd"
    }else if(one_num === 3){ 
        OrdinalEnding = "rd"
    }else {
        OrdinalEnding = "th"
    }
    console.log(`${one_num}${OrdinalEnding}`)
};