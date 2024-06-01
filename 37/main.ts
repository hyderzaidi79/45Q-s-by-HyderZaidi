// making a function
function make_shirt(size: string = "Large", printMsg:string =`"I Love Typescript"`){

    console.log(`creating a ${size} shirt with ${printMsg} print on it.`)
}
// calling a function with by default values
make_shirt();

// calling a function now with medium size and default msg
make_shirt("Medium");

// calling a function now with Small size and Differnt print msg
make_shirt("Small", `"Code with Hyder"`);