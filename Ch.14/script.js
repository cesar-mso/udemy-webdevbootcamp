/* Code sample - Section 14, excercise 76
window.alert("Hello");
alert("World");
console.log("done!");*/

/* Code sample - Section 14, excercise 77 
var solution = 2 + 3;

alert(typeof(solution));
alert(solution);*/

/* Code sample - Section 14, exercise 78 
var myName = prompt("What's your name?");
alert("Hello " + myName + ", nice to meet you!!");*/

/* Code sample - Section 14, excercise 79+80 - coding exercise 

    var a = "3";
    var b = "8";


    /* My code - START */
    /*var c = a;
    a = b;
    b = c;*/
    /* My code - END*/

    /*console.log("a is " + a);
    console.log("b is " + b);*/

/* Code sample - Section 14, excercise 82 - coding exercise 
var greeting = "Hello"
var myName = "Cesar"

alert(greeting + " " + myName + "!");*/

/* Code sample - Section 14, excercise 83 - coding exercise 
var name = "Cesar Ojeda"
alert(name.length);

var input = prompt("Tell me something shorter than 140 characters, and I'll count all characters...");
var count = input.length;
var max = 140;
var total = max - count;

var msg = "Let me see...";

//alert(count);
//alert(max);
//alert(total);

alert(msg);
alert("You typed " + count + " characters, and have " + total + " characters remaining!");*/

/* Code sample - Section 14, excercise 84 - coding exercise 
var myName = "Cesar Ojedasaa";
alert(myName.slice(1,5));

// Count excersice
var input = prompt("Tell me something and I will shorten it to less than 140 characters");
var count = input.length;
var max = 140;

var total = input.slice(0,140);

var msg = "Let me see...";
alert(msg);
alert(total);
//alert(max);
//alert(total);*/

/* Code sample - Section 14, excercise 85 + 86 - coding CHALLENGE WOW OMG r u 4 realz 
var myName = "cesar ojeda";
alert(myName.toUpperCase());
alert(myName.toLowerCase());*/

// make first letter in name capital excersice
var input = prompt("Tell me your name, stranger...");
var inputLength = input.length;
var firstLetter = input.slice(0,1);
var remainingLetters = input.slice(1,inputLength);
var properName = firstLetter.toUpperCase() + remainingLetters;


alert("Let me see...");
alert("Your name is " + inputLength + " characters long...");
alert('It starts with the letter "' + firstLetter + '"...');
alert('and finishes with "' + remainingLetters + '"...');
alert("Nice to meet you, " + properName + "!");

// need to validate this as i dont have internet!!