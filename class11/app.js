

// JavaScript Program Loop exercise ( number1 ___ number8)




// exercise#01
// Write a js program to print all natural numbers from 1 to n. - using while loop ?

let i = 1
while (i <= 100) {
    document.write(i + '<br>');
    i++;
}


// exercise#02
// Write a js program to print all natural numbers in reverse (from n to 1). - using while loop?

let i = 100;

while (i >= 1) {

    document.write(i + '<br>');
    i--;
}


// exercise#03
// Write a js program to print all alphabets from a to z. - using while loop?

let alphabet = 'a';
while (alphabet <= 'z') {
    document.write(alphabet + "<br>");
    alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
}

var char = '';
var result = char.charCodeAt(char);
document.write(result)


// exercise#04
// Write a js program to print all even numbers between 1 to 100. - using while loop?

let i = 2;

while (i <= 100) {
    if (i % 2 == 0)
        document.write(i + '<br>');
    i++;
}


// exercise#05
// Write a js program to print all odd number between 1 to 100.?

let i = 1;
while (i <= 100) {
    if (i % 2 !== 0)
        document.write(i + '<br>');

    i++;
}


// exercise#06
// Write a js program to find sum of all natural numbers between 1 to n.?

let sum = 0;
let number = 1;

while (number <= 100) {
    sum += number;
    number++;
}

document.write(sum)



// exercise#07
// Write a js program to find sum of all even numbers between 1 to n.?

let n = 100;
let sum = 0;
for (i = 1; i <= n; i++) {
    if (i % 2 == 0)
        sum = sum + i;
}

document.write(sum + '<br>')


// exercise#08
// Write a js program to find sum of all odd numbers between 1 to n.?

let n = 100
let sum = 0;
for (i = 1; i <= n; i++) {

    if (i % 2 !== 0)
        sum = sum + i
}

document.write(sum)



// Complete JavaScript loop exercise



// Start If-else exercise





// exercise#01
// Write a js program to find maximum between two numbers.?

var num1 = prompt("Enter  Number 1");
var num2 = prompt("Enter  Number 2");

if (num1 > num2) {

    document.write(num1 + "<br" + "is greater number")

}

else {
    document.write(num2 + "<br>" + "is greater")
}




// exercise#02
// Write a js program to find maximum between three numbers.?

var num1 = prompt("Enter  Number 1")
var num2 = prompt("Enter  Number 2")
var num3 = prompt("Enter  Number 3")

if (num1 > num2 && num1 > num3) {

    document.write(num1 + "<br>" + "is greater number")

}

else if (num2 > num1 && num2 > num3) {
    document.write(num2 + "<br>" + "is greater number")

}

else {
    document.write(num3 + "<br>" + "is greater number")
}


// exercise#03
// Write a js program to check whether a number is negative, positive or zero.?


var a = prompt("Enter Any Number ")

if (a > 0) {
    document.write(a + "<br>" + "is positive number")
}

else if (a < 0) {
    document.write(a + "<br>" + "is negative number")
}

else {
    document.write(a + "<br>" + "is zero number")
}


// exercise#04
// Write a js program to check whether a number is divisible by 5 and 11 or not.?


var a = prompt("Enter Any Number")

if (a % 5 == 0) {
    document.write(a + '<br>' + 'is divisible by 5')
}

else if (a % 11 == 0) {
    document.write(a + '<br>' + 'is divisible by 11')
}

else {
    document.write(a + '<br>' + 'is not divisible by 5 and 11')
}



// exercise#05
// Write a js program to check whether a number is even or odd.?


var a = prompt("Enter Any Number")

if (a % 2 == 0) {
    document.write(a + '<br>' + 'is Even Number')
}

else if (a % 2 !== 0) {
    document.write(a + '<br>' + 'is odd number')
}

else {

    document.write(a + "<br>" + "is not even not odd")
}


// exercise#06
// Write a js program to check whether a year is leap year or not.?


var checkLeapYear = prompt("Enter Any Number")

if (checkLeapYear % 4 == 0) {

    document.write(checkLeapYear + "<br>" + "is leap year")

}

else {
    document.write(checkLeapYear + "<br>" + "is not leap year")

}

// exercise#07
// Write a js program to input any alphabet and check whether it is vowel or consonant.?


var ch = prompt("Enter single character ")

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    document.write(ch + "<br>" + "is vowel number")
}

else {
    document.write(ch + "<br>" + "is constant number")
}


// exercise#08
// Write a js program to input any character and check whether it is alphabet, digit or special character.?


let char = "$";

if (/[a-zA-Z]/.test(char)) {


    document.write(char + "The character is an alphabet.");

}
else if (/[0-9]/.test(char)) {

    document.write(char + "The character is a digit.");
}
else {
    document.write(char + "The character is a special character.");

}



//    exercise#09
// Write a js program to check whether a character is uppercase or lowercase alphabet.?


var char2 = "B";

if (/[a-z]/.test(char2)) {
    document.write(char2 + "The character is a lowercase alphabet.");

}
else {
    document.write(char2 + "The character is an uppercase alphabet.");

}


// exercise#10
// Write a js program to input week number and print week day.?

var weekOfNum = prompt("Enter 1 to 7 number")
weekOfNum = parseInt(weekOfNum);

if (weekOfNum == 1) {
    document.write("monday")
}
else if (weekOfNum == 2) {
    document.write("Tuesday")
}
else if (weekOfNum == 3) {
    document.write("wednesday")
}
else if (weekOfNum == 4) {
    document.write("Thursday")
}
else if (weekOfNum == 5) {
    document.write("Friday")
}
else if (weekOfNum == 6) {
    document.write("saturday")
}
else if (weekOfNum == 7) {
    document.write("sunday")
}

else {
    document.write("Invalid number")
}


// exercise#11
// Write a js program to input month number and print number of days in that month.?

var monthName = prompt("Enter 1 to 12 number")
monthName = parseInt(monthName);

if (monthName == 1) {
    document.write("<br>" + "january have 31 days")
}
else if (monthName == 2) {
    document.write("<br>" + "Febrarury 28 days in common years, and 29 days in leap years")
}
else if (monthName == 3) {
    document.write("<br>" + "March have 31 days")
}
else if (monthName == 4) {
    document.write("<br>" + "April have 30 days")
}
else if (monthName == 5) {
    document.write("<br>" + "may have 31 days")
}
else if (monthName == 6) {
    document.write("<br>" + "june have 30")
}
else if (monthName == 7) {
    document.write("<br>" + "july have 31 days")
}

else if (monthName == 8) {
    document.write("<br>" + "August have 31 days ")
}

else if (monthName == 9) {
    document.write("<br>" + "September have 30 days")
}

else if (monthName == 10) {
    document.write("<br>" + "October have 30 days")
}

else if (monthName == 11) {
    document.write("<br>" + "November have 30 days")
}

else if (monthName == 12) {
    document.write("December have 31 days")
}


// exercise#12
// rite a js program to count total number of notes in given amount.?

var amount = 69000;

var tenNotes;
var twentyNotes;
var fiftyNotes;
var hundredNotes;
var FiveHundNotes;
var thousandNotes;
var FiveThousandNotes;


tenNotes = (amount / 10);
twentyNotes = (amount / 20);
fiftyNotes = (amount / 50);
hundredNotes = (amount / 100);
FiveHundNotes = (amount / 500);
thousandNotes = (amount / 1000);
FiveThousandNotes = (amount / 5000);


document.write(${ amount } cantain ${ tenNotes } Notes of ten and 
    ${ twentyNotes } Notes of Twenty and ${ fiftyNotes } Notes of fifty
     and ${ hundredNotes } Notes Of Hundred and ${ FiveHundNotes } 
     Notes of Five Hundred and ${ thousandNotes } Notes of Thousands and
      ${ FiveThousandNotes } Notes of five Thousand);


// exercise#13
// Write a js program to input angles of a triangle and check whether triangle is valid or not.?



var angle = prompt("Enter angles of triangle")
var angle1 = 45
var angle2 = 45
var angle3 = 90
angle = angle1 + angle2 + angle3 ;
if ( angle== 180 && angle1 !==0 && angle2 !==0 && angle3 !==0) {

    document.write("it is valid triangle")

}

else {
    document.write("it is invalid triangle")
}


// exercise#14
// Write a js program to input all sides of a triangle and check whether triangle is valid or not.?

var a = prompt("Enter side 1")
var b = prompt("Enter side 2")
var c = prompt("Enter side 3")

if ( a==b && b==c && c ==a) {
    document.write("equilateral triangle")
}

else if (a !==b && b!==c &&  c!==a ) {
    document.write("scaleme triangle")
}

else  {

    document.write("isosceles triangle")
}


// exercise#15
// Write a js program to find all roots of a quadratic equation.?

function findRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c;
  

    if (discriminant < 0) {
        document.write ("Roots are imaginary")
    }

    else if (discriminant === 0) {
        let root = -b / (2 * a);
        document.write ("Root is:  + root" )
    }
    
    else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.write( " + root1 + and  root2")
    }
}

// exercise#16
// Write a js program to calculate profit or loss.?

var a = prompt("Enter cost price")
var b = prompt("Enter selling price")
 if (a<b) {
    document.write("today is your profit")
 }

 else {
    document.write("today is your loss")
 }


//  exercise#17
// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:?
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F



var Physics = prompt("Enter physics marks")
var Chemistry = prompt("Enter chemistry marks")
var Biology = prompt("Enter biology marks")
var Mathematics = prompt("Enter mathematics marks")
var Computer = prompt("Enter computer marks ")

var total = Physics + Chemistry + Biology + Mathematics + Computer ;

var percentage = total/5

if (Percentage >= 90) {
    console.log("Your Grade is A");
 }
 else if (Percentage >= 80) {
 
    console.log("your Grade is B");
 
 }
 
 else if (Percentage >= 70) {
    console.log("your Grade is C");
 }
 
 else if (Percentage >= 60) {
    console.log("you Grade is D");
 
 }
 
 else if (Percentage >= 40) {
    console.log("you Grade is E");
 }
    else {
        console.log("Sorry your fail Try better Next Time");
     }
      

    //  exercise#18
    // Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
    // Basic Salary <= 10000 : HRA = 20%, DA = 80%
    // Basic Salary <= 20000 : HRA = 25%, DA = 90%
    // Basic Salary > 20000 : HRA = 30%, DA = 95% ?
    
    var BasicSalary = 690000;

if (BasicSalary <= 10000) {

   var HRA = 20;
   var DA = 80;
   
}

else if (BasicSalary <= 20000) {

  var HRA = 25;
  var DA = 90;

   
}

else if (BasicSalary > 20000) {

    var HRA = 30; 
    var DA = 95;
  
  
     
  }
  
  var GrossSalary = BasicSalary + (BasicSalary * HRA / 100) + (BasicSalary * DA / 100);
  
  console.log("your Gross Salary is" ${"GrossSalary"});
  



// 20. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit


var electricityUnit = 369;

if(electricityUnit <= 50){

   var electricityBill = electricityUnit * 0.50;

}
else if (electricityUnit > 50 && electricityUnit <= 100 ) {

   var electricityBill = electricityUnit * 0.75;

}
else if (electricityUnit > 100 && electricityUnit <= 250 ) {

    var electricityBill = electricityUnit * 1.20;
    
 }
 else   {
 
    var electricityBill = electricityUnit * 1.50;
    
 }
 
 console.log(Your Total bill is ${electricityBill});



















































































































