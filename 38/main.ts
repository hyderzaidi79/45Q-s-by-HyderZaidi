//creat a function that accept the name of city and its country and give the parameter of country a default value
function describe_city(city:string, country:string ="Pakistan"){
console.log(`${city} is in ${country}.`)
}
// call function with default country name
describe_city("Karachi");
describe_city("Lahore");

// call function with a country name other than default country 
describe_city("Berlin", "Germany");
