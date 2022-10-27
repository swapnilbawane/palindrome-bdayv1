let inputDate = document.querySelector("#input-date");
let btnShow = document.querySelector("#btn-show");
let outputMessage = document.querySelector("#output-message");

function createDifferentDateFormats(yyyy, mm, dd) {
  var yyyymmdd = yyyy + mm + dd;
  var mmddyyyy = mm + dd + yyyy;
  var ddmmyyyy = dd + mm + yyyy;
  var ddmmyy = dd + mm + yyyy.slice(-2);
  var mmddyy = mm + dd + yyyy.slice(-2);
  var yyddmm = yyyy.slice(-2) + dd + mm;

  return [yyyymmdd, mmddyyyy, ddmmyyyy, ddmmyy, mmddyy, yyddmm];
}

function reverseString(takeString) {
  let reversedString = "";

  for (let i = takeString.length; i >= 0; i--) {
    reversedString = reversedString + takeString.charAt(i);
  }

  return reversedString;
}

function checkPalindromeForAllDates(diffDateFormatsArray) {
  let list = [];

  for (let i = 0; i < diffDateFormatsArray.length; i++) {
    if (reverseString(diffDateFormatsArray[i]) === diffDateFormatsArray[i])
      list[i] = 1;
    else list[i] = 0;
  }

  return list;
}

function leapYear(yearNum) {
  if (yearNum % 400 === 0) {
    return 1;
  }

  if (yearNum % 100 === 0) {
    return 1;
  }

  if (yearNum % 4 === 0) {
    return 1;
  } else return 0;
}

function createNextDate(dayNum, monthNum, yearNum) {
  let daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  dayNum = dayNum + 1;

  if (monthNum === 2) {
    if (leapYear(yearNum)) {
      if (dayNum > 29) {
        dayNum = 1;
        monthNum = 3;
      }
    } else {
      if (dayNum > 28) {
        dayNum = 1;
        monthNum = 3;
      }
    }
  } else {
    if (dayNum > daysinMonth[monthNum - 1]) {
      if (monthNum === 12) {
        yearNum++;
        dayNum = 1;
        monthNum = 1;
      } else {
        dayNum = 1;
        monthNum++;
      }
    }
  }

  return [dayNum, monthNum, yearNum];
}

function calcNextPalindromeDate(yyyy, mm, dd, isPalindrome) {
  // increment day
  let yearNum = Number(yyyy);
  let dayNum = Number(dd);
  let monthNum = Number(mm);
  let counterCalc = 0;
  let returnDate;
  // A loop that keeps incrementing date and running palindrome function
  do {
    let newDate = createNextDate(dayNum, monthNum, yearNum);
    counterCalc++; // calculate how many days far you have come from palindrome.

    if (counterCalc === 20) {
      console.log("20");
    }

    if (counterCalc === 40) {
      console.log("40");
    }
    if (counterCalc === 60) {
      console.log("60");
    }
    if (counterCalc === 80) {
      console.log("80");
    }

    let day;
    let month;
    let year = newDate[2].toString();

    if (newDate[1] < 10) {
      month = "0" + newDate[1];
    } else month = newDate[1].toString();

    if (newDate[0] < 10) {
      day = "0" + newDate[0];
    } else day = newDate[0].toString();

    // generate date
    // and call check Palindrome for each date
    var diffDateFormatsArray = createDifferentDateFormats(year, month, day);
    var checkResultsForDates = checkPalindromeForAllDates(diffDateFormatsArray);

    for (let i = 0; i < checkResultsForDates.length; i++) {
      if (checkResultsForDates[i]) {
        isPalindrome = 1;

        returnDate = newDate;
      } else {
        isPalindrome = 0;
      }

      if (isPalindrome) break;
    }

    dayNum = newDate[0];
    monthNum = newDate[1];
    yearNum = newDate[2];
  } while (!isPalindrome);

  return [counterCalc, returnDate];
}

function calcPalindrome(e) 
{
  var bDay = inputDate.value;
  let isPalindrome = 0;

  if (bDay !== "") 
{
    // which means it is not empty field
    var bDayArray = bDay.split("-");

    var yyyy = bDayArray[0];

    if (bDayArray[1] < 10) {
      var mm = "0" + Number(bDayArray[1]);
    } else var mm = bDayArray[1];

    if (bDayArray[2] < 10) {
      var dd = "0" + Number(bDayArray[2]);
    } else var dd = bDayArray[2];

    console.log(dd, mm, yyyy);

    // create different date formats
    var diffDateFormatsArray = createDifferentDateFormats(yyyy, mm, dd);
    console.log(diffDateFormatsArray);
    var checkResultsForDates = checkPalindromeForAllDates(diffDateFormatsArray);
    console.log("Palindrome array list:" + checkResultsForDates);

    for (let i = 0; i < checkResultsForDates.length; i++) {
      if (checkResultsForDates[i]) {
        isPalindrome = 1;
        break;
      } else {
        isPalindrome = 0;
      }
    }

    if (isPalindrome) 
  {
      outputMessage.innerText = "Yay. It is palindrome.";
  } 
    
  else 
  {
      console.log("year", yyyy, typeof yyyy);
      console.log("month", mm, typeof mm);
      console.log("date", dd, typeof dd);
      console.log("Palindrome value: ", isPalindrome, typeof isPalindrome);

      let [counter, nextDate] = calcNextPalindromeDate(
        yyyy,
        mm,
        dd,
        isPalindrome
      );

      outputMessage.style.display = "block";
      outputMessage.innerText =
        "Oh. You missed the palindrome by " +
        counter +
        " days." +
        " The next palindrome is now on " +
        nextDate[0] +
        "-" +
        nextDate[1] +
        "-" +
        nextDate[2];
  }

    // if any results for dates is true then date is palindrome.
    // else calculate next palindrome date
} 

else 
{
    outputMessage.innerText = "Hey, please input your birthday.";
  }

}

btnShow.addEventListener("click", calcPalindrome);
