"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// write a function that takes in the name of city and its country.
//The function should return a string formatted like this:
function city_country(cityName, countryName) {
    return `${cityName} , ${countryName}`;
}
// calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokoyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Khatmando", "Nepal"));
