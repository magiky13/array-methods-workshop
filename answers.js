//e2

var testArray = [1, 2, -3, -5];

var getPositives = testArray.filter(function(numbers){
    return numbers > 0
});

console.log(getPositives)

//e1

var testArray = [1, 2, -3, -5];

testArray.forEach(function(number){
    if(number > 0){
        console.log(number);
    }
});

//e2b
var testArray = [1, 2, -3, -5];

testArray.forEach(function(number){
    return testArray.filter(number > 0);
        forEach(number);
        console.log(number);
});