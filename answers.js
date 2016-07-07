//e2

var testArray = [1, 2, -3, -5];

var getPositives = testArray.filter(function(numbers){
    return numbers > 0
});

//console.log(getPositives)

//e1
/*
var testArray = [1, 2, -3, -5];

//var printPositive = testArray.forEach(function(number){
    if(number > 0){
        //console.log(number);
    }
});

//e2B

var printPositive = testArray(function(number){
    return testArray.filter(number > 0).forEach
});

*/
//e3

var testArray2 = [0, 1, 5, ""];

var filterArray = function(array, func) {return array.filter(func);};

var truthy = function(x){
    if(x){
        return x;
    }
};

//console.log(filterArray(testArray2, truthy));

//e4


