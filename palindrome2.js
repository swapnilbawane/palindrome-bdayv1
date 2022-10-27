let inputDate = document.querySelector("#input-date"); 
let btnShow = document.querySelector("#btn-show");
let outputMessage = document.querySelector("#output-message"); 

function reverseString(takeString) { 
    let reversedString = ""; 

    for ( let i=takeString.length; i>=0; i--)
    { 
        reversedString = reversedString + takeString.charAt(i); 
    }
    
    return reversedString; 

}


function createDifferentDateFormats(yyyy, mm, dd) {
    var yyyymmdd = yyyy+mm+dd;
    var mmddyyyy = mm+dd+yyyy; 
    var ddmmyyyy = dd+mm+yyyy;
    var ddmmyy = dd+mm+yyyy.split(-2);
    var mmddyy = mm+dd+yyyy.split(-2);
    var yyddmm = yyyy.split(-2)+dd+mm; 

    return [ yyyymmdd, mmddyyyy, ddmmyyyy, ddmmyy, mmddyy, yyddmm ]; 
}

function checkPalindromeForAllDates(diffDateFormatsArray) { 
let list =[];

    for ( let i=0; i<diffDateFormatsArray.length; i++)
    {
        if(reverseString(diffDateFormatsArray[i]) == diffDateFormatsArray[i])
        list[i]=1; 
        else 
        list[i]=0;
    }

 console.log("list"+list);  
 return list; 
}

function leapYear(yearNum) { 
    if ( yearNum % 400 === 0)
    { return 1; }

    if ( yearNum % 100 === 0)
    { return 1; }

    if ( yearNum % 4 === 0)
    { return 1; }

    else return 0; 
}

function createNextDate(dayNum, monthNum, yearNum) 

{
  let daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  dayNum = dayNum + 1;
  
  if (monthNum === 2) 
  {

    if (leapYear(yearNum)) 
    {
      if (dayNum > 29) 
      {
        dayNum = 1;
        monthNum = 3;
      }
    } 
    
    else 
    {
    
      if (dayNum > 28) 
      {
        dayNum = 1;
        monthNum = 3;
      }
    }

  } 
  
  else 
  {
    if (dayNum > daysinMonth[monthNum - 1]) 
    {
      
      if (monthNum === 12) 
      {
        yearNum++;
        dayNum = 1;
        monthNum = 1;
      } 
      else 
      {
        dayNum = 1;
        monthNum++;
      }
    }
   }

  return [dayNum, monthNum, yearNum];
}

function calcNextPalindromeDate(yyyy,dd,mm,isPalindrome) 
{ 
// increment day 
let yearNum = Number(yyyy);
let dayNum = Number(dd); 
let monthNum = Number(mm); 
let counterCalc = 0; 

// A loop that keeps incrementing date and running palindrome function 
while(!isPalindrome)
{
    let newDate = createNextDate(dayNum,monthNum,yearNum);
    counterCalc++; // calculate how many days far you have come from palindrome. 

    let year = Number(newDate[2]);
    let month = Number(newDate[1]);
    let day = Number(newDate[0]); 

    // generate date 
    // and call check Palindrome for each date 
    var diffDateFormatsArray = createDifferentDateFormats(year,month,day);
    var checkResultsForDates = checkPalindromeForAllDates(diffDateFormatsArray);
    
    for ( let i=0; i<checkResultsForDates.length; i++)
    { 
        if (checkResultsForDates[i]) 
        { isPalindrome = 1; break;  }
        else 
        { isPalindrome = 0; }
    }
 
    dayNum = newDate[0]; 
    monthNum = newDate[1]; 
    yearNum = newDate[2];

}
 

return [counter,newDate]; 

}

function calcPalindrome  (e) { 

    var bDay = inputDate.value;
    let isPalindrome = 0;
    
if ( bDay !== "") // which means it is not empty field 
{ 
    
    var bDayArray = bDay.split("-"); 

    var yyyy = bDayArray[0];
    var mm = bDayArray[1];
    var dd = bDayArray[2]; 

    // create different date formats 
    var diffDateFormatsArray = createDifferentDateFormats(yyyy,mm,dd);
    var checkResultsForDates = checkPalindromeForAllDates(diffDateFormatsArray);
     
    for ( let i=0; i<checkResultsForDates.length; i++)
    { 
        if (checkResultsForDates[i]) 
        { isPalindrome = 1; break;  }
        else 
        { isPalindrome = 0; }
    }

    if(isPalindrome) 
    { 
    outputMessage.innerText = "Yay. It is palindrome.";     
    } 
    else 
    { 
    let [ counter, nextDate] = calcNextPalindromeDate(yyyy,dd,mm,isPalindrome); 
    outputMessage.innerText = "Oh. You missed the palindrome by"+counter+" days."+" The next palindrome is now on "+nextDate;
    }

    // if any results for dates is true then date is palindrome. 
    // else calculate next palindrome date  


}

else { 
    outputMessage.innerText = "Hey, please input your birthday."; 
}

}

btnShow.addEventListener("click",calcPalindrome); 
