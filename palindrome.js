



// reverse a string 
function reverseString() { 
    let oldString="20220106";
    let newString=""; 

    for (let index=oldString.length; index>=0; index--)
    {
        newString = newString + oldString.charAt(index);
    }

    console.log(newString);
}

reverseString();

// split a given date into array - in chrome dev tools it will appear as object because in javascript even array is an object. 
let aString = "1000-0-1"; 
let splitString = aString.split("-");
console.log(typeof(splitString)); 
console.log(splitString);
console.log(splitString[0]);

let dateObject = { 
day: "7",
month: "1",
year: "2022"
 }; 


if(splitString[2]<10) dateObject.day = "0"+splitString[2];
if(splitString[1]<10) dateObject.month = "0"+splitString[1]; 
dateObject.year = splitString[0]; 

console.log(dateObject);

// convert it into different date types 

let ddmmyyyy = dateObject.day + dateObject.month + dateObject.year; 
 console.log(ddmmyyyy); 
let mmddyyyy = dateObject.month + dateObject.day + dateObject.year; 
console.log(mmddyyyy);

let combinedDateFormats2 = [ddmmyyyy,mmddyyyy];
console.log(combinedDateFormats2);

// 
function reverseStringNew(dateTaken) { 
    let revStringDummy = ""; 

    for ( let i=dateTaken.length; i>=0; i--)
    { 
        revStringDummy = revStringDummy + dateTaken.charAt(i); 
    }

    return revStringDummy; 
}

// isPalindrome for a single string 
function isPalindrome(date)
{ 
    let revString = reverseStringNew(date);
    if (revString == date) { console.log("Palindrome"); return 1; }
    return 0;
}


isPalindrome("racecar");

// isPalindrome for an array of strings.

let flag = 0; 
 
for ( let i=0; i<combinedDateFormats2.length; i++)
{ 
console.log(i+" "+flag+" "+combinedDateFormats2[i]);
flag = isPalindrome(combinedDateFormats2[i]); 
}

console.log(flag); 

// nextdate 

let date = "20-3-2022";

// function nextDate (dataDate) { 
// daysinmonth array = [jan,feb]; 

//     day = day+1;
// if month = 2;
// { if leap year if days > 29 --- next month day=1, month = 3; 
// } 
// else 
// if daysinmonth > 
// }