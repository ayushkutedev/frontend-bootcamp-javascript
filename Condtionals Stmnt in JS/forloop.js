//Loops are the Statements that we can use to control a flow of the program and to do some repetative tasks 

//For Loop in JavaScript

var a = 'Russiaaa'

for(i=0; i<10; i++){

    console.log(a)
}

//Applying forloop...

var num = [5,7,2,8,9,4]

var squaredArr = []

for(i=0; i<num.length; i++){
    squaredArr.push(num[i]*num[i])
}

console.log(squaredArr)
//--------------------------------------------------------------------------------------------------------------------------------
//Display number 1 to 5

for(i=0; i<10; i++){
    console.log(i)
}
//--------------------------------------------------------------------------------------------------------------------------------
// Display Maximium Number 

var c = [1,3,4,5,6,7,8,10]
var max = 0

for(i=0; i<c.length; i++){
    if (c[i]>max){
        max = c[i]
    }
}

console.log(max)

