

function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
       // console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}

const btn = document.querySelector('#btn');
btn.addEventListener ('click', function (){
     console.log('You clicked me.');
     $('p').show();
     

fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    //console.log(repoList);

    let output = '';
    for (let i = 0; i < repoList.length; i ++){
        const siteLink = ' https://api.github.com/repos/HackYourFuture/' + repoList[i].name;
        output += '<li>' + "<a href=\"" + siteLink + "\" target =\"_blank\">" + siteLink + "</a>" + '</li>'

    //console.log(repoList[i].name );
  
    }
    document.getElementById("demo").innerHTML = output;
});

});


// Step 1

function threeAndFive(startValue, endValue, callThree, callFive) {
    let array = [];
    for( let i = startValue; startValue <= endValue; startValue ++){
        array.push(startValue);
    } 
    array.forEach(function(item) {
        if((item % 3 == 0) && (item % 5 == 0)) {
            console.log("Q1:- Invoke both functions.........");
            callThree(item);
            callFive(item);
        }
        else if(item % 3 == 0) {
            console.log("Q1:- Invoke callThree function.......");
            callThree(item);
        }
        else if(item % 5 == 0) {
            console.log("Q1:- Invoke callFive function.........");
            callFive(item);
        }
    });
    
}

function divisibleByThree(item){
    console.log(item + " is divisible by 3 ");
}
function divisibleByFive(item){
    console.log(item + " is divisible by 5");
}

threeAndFive(10, 15, divisibleByThree, divisibleByFive);

// Creating new Arry
function createArray(startValue, endValue) {
    let array = [];
    for( let i = startValue; i <= endValue; startValue ++) {
        array[i] = i ++;
    }
    return array;
}
let newArray = createArray(10,15); 
console.log( 'Creating New arry: ', newArray);




// 1.2 Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


// for loop
function repeatStringNumTimes(str, num) {
let accumulateNum = '';
if (num > 0) {
    for (let i = 0; i < num; i ++) {
        accumulateNum += str;
    }
}
return accumulateNum;
}

let result = repeatStringNumTimes ('abc', 3);
console.log('Q1.3:- This is for loop: ' + result); 

// while loop
function repeatStringNumTimes (str, num) {
let accumulateNum = '';
if (num > 0) {
    while (num > 0) {
        accumulateNum += str;
        num --;
    }
} else {
    accumulateNum = '';
}
return accumulateNum;
}

let resultWhileLoop = repeatStringNumTimes ('abc', 3);
console.log('Q1.4:- This is while loop: ' + resultWhileLoop);

//do loop

function repeatStringNumTimes (str, num) {
let accumulateNum ='';
if (num > 0) {
    do {
        accumulateNum += str;
        num --;
    } while (num > 0)
} else {
    accumulateNum = '';
} 
return accumulateNum;
}

let resultDoLoop = repeatStringNumTimes ('abc', 3);
console.log('Q1.5:- This is do loop: ' + resultDoLoop);

/*1.6:   a constructor function:
var Car = function() {
this.wheels = 4;
this.engines = 1;
this.seats = 5;
}; 
You can think of a constructor as a description for the object it will create.

Have your MotorBike constructor describe an object with wheels, engines and seats properties and set them to numbers.
*/

let motorBike = function() {
this.engines = 1;
this.wheels = 2;
this.seats = 2;
};

console.log('Q1.6:- Constructor Motorbike: ' + motorBike);

/*  Q 1.7:  Here is an example:

var arr = [
[1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
for (var j=0; j < arr[i].length; j++) {
  console.log(arr[i][j]);
}
} 

Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

*/

function multiplyAll(arr) {
let product = 1;
for (let i = 0; i <arr.length; i++) {
  for (let j = 0; j < arr[i].length; j ++) {
    product *= arr[i][j];
  }
}
return product;
}

let result1 = multiplyAll( [[1,2],[3,4],[5,6,7]]);
let result2 = multiplyAll( [[1],[2],[3]]);

console.log('Q1.7:- ' + result1);
console.log('Q1.7:- ' + result2);







