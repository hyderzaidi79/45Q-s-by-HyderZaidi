//creat a var as larray of different cities
let locationList: string[] = ["Hyderabad", "Ahmedpur", "Osta Muhammad", "Faisalabad", "Islamabad"];

//print array in original order
console.log("original Order", locationList);

//print array in alphabetical order without modifing the original list
console.log("Alphabatical Order", [...locationList].sort());

//print array as, it is still in original order
console.log("Still in Original Order", locationList);

//print array in reverse order without changing order of original list
console.log("Reverse Order without changing in original list", [...locationList].reverse());

//print array as, it is still in original order
console.log("Still in Original Order", locationList);

//print reverse order of your array, that its original order has changed
console.log("Original Array Reversed", locationList.reverse());

// print array again 
console.log("Print array again", locationList)

//print array in reverse order again
console.log("Back to Original Order", locationList.reverse()); 

//print original array in alphabetical order
console.log("Arrange in Alphabatical Order", locationList.sort());

//print aphabeticlly ordered array in reverse order
console.log("Alphabetically odrdered Array Reversed again", locationList.reverse());