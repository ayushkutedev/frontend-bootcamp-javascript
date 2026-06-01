// in JavaScript the for-loop allows you to loop throgh the properties of an object
// The Statements of code found withhin the loop body will be executed once for eacy property of the object.

//Using for-in loop...

var car = {
    Brand : 'Bmw',
    Name : 'Bwmx7',
    Engine :'J6',
    Color : 'Black' 
}

for (var cars in car) {
    console.log(car[cars])
}