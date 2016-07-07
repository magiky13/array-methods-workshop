//e2
/*
var testArray = [1, 2, -3, -5];

var getPositives = testArray.filter(function(numbers){
    return numbers > 0
});
*/
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
/*
var testArray2 = [0, 1, 5, ""];

var filterArray = function(array, func) {return array.filter(func);};

var truthy = function(x){
    if(x){
        return x;
    }
};
*/
//console.log(filterArray(testArray2, truthy));

//e4

var testString = "dsdsdsd sd sd sd sd sf frfrfrgtgtgtgttgbtg ldjoi";
/*

var longestWord = testString.split(" ").reduce(function(a, b){
    if(a.length > b.length){
        return a;
    }
    else{
        return b;
    }
});
*/
//console.log(longestWord);

//e5

var myVowels = ["a", "e", "i", "o", "u", "y"];
/*
var countVowels = testString.split(" ").reduce(function(count, b) {
        if(myVowels.indexOf(b) > -1) { // -1 is a match
            console.log(b)
            count = count + 1;
        }
    return count;
}, 0);

console.log(countVowels);
*/
/*
var countVowels = function(string){
    var newArr = string.split(" ");
    return newArr.reduce(function(count, currentLetter){
        if(myVowels.indexOf(currentLetter) > -1) {
            count += 1;
        }
        return count;
    }, 0)
}

console.log(countVowels(testString));
*/
//e6
/*
var testArray = [3333, 3333, 444, 444, -2222];

var highLow = testArray.reduce(function(accum, number){
        if(number > accum.highest){
            accum.highest = number;
        }
        if(number < accum.lowest){
            accum.lowest = number;
        }
        return accum;
}, {highest: -Infinity, lowest: Infinity});

console.log(highLow);
*/
/*
var testArray2 = [3333, 3333, 444, 444, -2222];

var highLowTwo = testArray2.reduce(function(accum, number){
        if(number > accum.highest){
            accum.secondhighest = accum.highest;
            accum.highest = number;
        }
        if(number < accum.highest && number > accum.secondhighest){
            accum.secondhighest = number;
        }
        if(number < accum.lowest){
            accum.secondlowest = accum.lowest;
            accum.lowest = number;
        }
        if(number < accum.lowest && number > accum.secondlowest){
            accum.secondlowest = number;
        }
        return accum;
}, {highest: -Infinity, lowest: Infinity, secondhighest: -Infinity, secondlowest: Infinity});

console.log(highLowTwo);
*/

//e8


var newString = "kdsncsdnkcnekcjkenkencd"

var alphaBeats = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var countCharts = function(string){
       var newstring = string.split('');
       return newstring.reduce(function(a, b){
           if(alphaBeats.indexOf(b) > -1 ) { // -1 is a match
               count += 1;
           }
       }
}, {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0});

console.log(countCharts);


//e9
//e10
