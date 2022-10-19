
// reverse a string 
function reverseString(dateNow) { 
    let newString="";

    for (let index=dateNow.length; index>=0; index--)
    {
        newString = newString + dateNow.charAt(index);
    }

    console.log(newString);
}


// Find out if its a palindrome using Reverse a String: 
function isPalindrome(dateStr)
{ 
    var reverseStringNew = reverseString(dateStr);
    return dateStr === reverseStringNew;
}

// Get Data as proper string for each month day and year for creating different date formats: 

function getDateasString(dateObject) 
{ 
    var datesAsString = { 
        day:"",
        month:"",
        year:"" 
    };

    if(dateObject.day<10) { 
        datesAsString.day = "0"+ dateObject.day; 
    }
    else datesAsString.day = dateObject.day.toString(); 

    if(dateObject.month<10) { 
        datesAsString.month = "0" + dateObject.month; 
    } 
    else datesAsString.month = dateObject.month.toString(); 

    datesAsString.year = dateObject.year.toString();  
    
    return datesAsString; 

}

// Using Date above in broken down formats now create date in all formats: 

function getDatesInAllFormats(dates)
{ 
   var ddmmyyyy=dates.day + dates.month + dates.year;
   var mmddyyyy=dates.month + dates.day + dates.year;
   var yyyyymmdd = dates.year + dates.month + dates.year;

   var ddmmyy = dates.day + dates.month + dates.year.slice(-2); 
   var mmddyy = dates.month + dates.day + dates.year.slice(-2); 
   var yyddmm = dates.year.slice(-2)+ dates.day+ dates.month;

}

// Now that we have Date in all formats, let's check if Palindrome for each one: 
function checkPalindromeForAllDatesFormats ( datesNew )
{ 
 var dateFormatLists = getDatesInAllFormats( datesNew ); 
 var palindromeList = []; 
 
 for ( let i=0; i<dateFormatLists.length; i++)
 { 
    var results = isPalindrome(dateFormatLists[i]); 
    palindromeList.push(results); 
 }
 return palindromeList; 

}


// Let’s check if its a leap year: 
function isLeap ( yearGiven )
{ 
    if( yearGiven % 400 === 0 )
        return true;

    if( yearGiven % 100 === 0 )
        return true; 

    if( yearGiven % 4 === 0 )
    return true; 

    return false; 
}

// Let’s get a next date if the current date is or not a leap year:
function getNextDateCheck(datesNewer)
{ 
    var day = datesNewer.day+1; 
    var month = datesNewer.month;
    var year = datesNewer.year; 

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; 

    if ( month === 2 )
    { 
        if(isLeap(year))
        {
           if(day>29)
           { 
            day = 1;
            month = 3; 
           } 
        }

        else 
        { 
            if(day>28)
            { 
                day = 1;
                month = 3;
            }
        }
    }

    else 
    { 
        if(day>daysInMonth[month-1]) 
        { 
           day = 1;
           month++;

        }
    
    }

    if(month>12) 
    { 
    month = 1;
    year++;     
    }

    return {
     day: day,
     month: month,
     year: year   
    }

}

// Let’s find out the next palindrome date: 

function getNextPalindromeDates(datesCheck)

var nextDates = getNextDateCheck(datesCheck); 
var counterForDays = 0;

while(1)
{
    counterForDays++;
    var 
}



// program begins here: 

let inputDate=document.querySelector("#input-date"); 
let btnShow = document.querySelector("#btn-show"); 
let outputMessage = document.querySelector("#output-message"); 

function calcPalindrome(e) 
{
var birthDay = inputDate.value; 

if (birthDay!== "") { 
    var birthDayArray = birthDay.split("-");

    var yyyy = birthDayArray[0];
    var mm = birthDayArray[1];
    var dd = birthDayArray[2];

    var birthDayObject = {
        day: Number(dd),
        month: Number(mm),
        year: Number(yyyy)
    };

    getDateasString(birthDayObject);
}

}



btnShow.addEventListener("click",calcPalindrome); 

