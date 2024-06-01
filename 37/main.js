// making a function
function make_shirt(size, printMsg) {
    if (size === void 0) { size = "Large"; }
    if (printMsg === void 0) { printMsg = "\"I Love Typescript\""; }
    console.log("creating a ".concat(size, " shirt with ").concat(printMsg, " print on it."));
}
// calling a function with by default values
make_shirt();
// calling a function now with medium size and default msg
make_shirt("Medium");
// calling a function now with Small size and Differnt print msg
make_shirt("Small", "\"Code with Hyder\"");
