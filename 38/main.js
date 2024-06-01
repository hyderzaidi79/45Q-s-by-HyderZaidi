function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
/*
function Describe_city (cityName: string, countryName:string) : string{
    return `${cityName} , ${countryName}`;
}
console.log(Describe_city ("Karachi","Pakistan"));
console.log(Describe_city ("Tokoyo", "Japan"));
console.log(Describe_city ("Berlin", "Germany"));
*/ 
