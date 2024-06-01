let cars=(manufacturer:string,model:number,color:string, ...options:any )=>{
  let CarFeature ={
    manufacturer:manufacturer,
    model:model ,
    color:color,
      };  
   options.forEach(option => {
  let [key, value] = option.split(":");
  cars[key.trim()]= value.trim();
  });
  return CarFeature
};
let my_car = cars ("Toyota",2024,"metallic", "Capacity : 7","Sunroof:  Yes " , "AC:No");

console.log(my_car);
