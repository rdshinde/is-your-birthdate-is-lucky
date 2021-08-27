const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector(".result");

checkBtn.addEventListener("click", checkBtnHandler);

// function to calculate sum of digits in a number.
function getSum(num){
    let sum = 0;
    while (num != 0) {
        sum = sum + Math.trunc(num % 10);
        num = num / 10;
    }
    return sum;
}

function message(msg){
    resultDiv.innerText = msg;
}

function messageDefiner(sum,num){
    
    if(sum%num === 0){
        message("WOW! You got lucky birthdate.🤩 🎉 🥳")
    }
    else{
        message("Sorry to say, but your birthdate is not that lucky. 😔")

    }
}

function checkBtnHandler() {
  dob = dateOfBirth.value;
  dob = parseInt(dob.replaceAll("-", ""));
  numSum = getSum(dob);
  const num = luckyNumber.value;
  messageDefiner(numSum,num); 

}

function displayBanner() {
  setTimeout(function () {
    document.querySelector(".privacy").classList.add("hidden");
  }, 3000);
}
document.addEventListener("DOMContentLoaded", displayBanner());
