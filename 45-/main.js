var cars = function (manufacturer, model, color) {
    var options = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        options[_i - 3] = arguments[_i];
    }
    var CarFeature = {
        manufacturer: manufacturer,
        model: model,
        color: color,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        cars[key.trim()] = value.trim();
    });
    return CarFeature;
};
var my_car = cars("Toyota", 2024, "Capacity : 7", "metallic", "Sunroof:  Yes ", "AC:No");
console.log(my_car);
