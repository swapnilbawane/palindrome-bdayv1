inputDate=document.querySelector("#input-date"); 

btnShow = document.querySelector("#btn-show"); 

outputMessage = document.querySelector("#output-message"); 

function replaceString(dateGiven) {
    //processing
    console.log(dateGiven);
    console.log(typeof(dateGiven));
    let dateString = dateGiven.replaceAll("-","");
    // Checking
    console.log(dateString);
    console.log(dateString.length); 
    // returning value
    return dateString; 
}

function playAround(dateGiven) { 
    
console.log("sliceyear: "+dateGiven.slice(0,4));
console.log("slicemonth: "+dateGiven.slice(4,6));
console.log("slicedate: "+dateGiven.slice(6,8));
}



function reverseString(dateNow) { 
    let newString="";

    for (let index=dateNow.length; index>=0; index--)
    {
        newString = newString + dateNow.charAt(index);
    }

    console.log(newString);
}

function compareString(givenString,reverseString) {
    if(givenString === reverseString)
    { 
        outputMessage.style.display = "block"; 
        outputMessage.innerText = "Your birthdate is a palindrome.";
    }
    else 
    {
       outputMessage.style.display = "block";
       outputMessage.style.color = "red";
       outputMessage.innerText = "RESULT: Your birthdate is not a palindrome."; 
    }; 
}

function dateFormat (replacesString) {
      // 20012021 
      // reverse string after converting it o data format. 
      // palindrome  consider dd-mm-yy format 
      // 12021002 



}


function calcPalindrome() {

   // read the string 
   // remove string - character print it 
   let replacedString = replaceString(inputDate.value);
   playAround(replacedString);
   // converts replaced string 
   let reversedString = reverseString(replacedString); 
   compareString(replacedString,reversedString);
   // reverse string 
   // next palindrome check 

}




btnShow.addEventListener("click",calcPalindrome); 

