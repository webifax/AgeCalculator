let yourAge = document.querySelector(".age");
let date = new Date();
let thisYear = date.getFullYear();

function calculate() {
  let age = yourAge.value;
  let yourYearOfBirth = thisYear - age;
  if (age <= 1000) {
    document.querySelector(
      ".result"
    ).innerHTML = `Hey, you were born in the year ${yourYearOfBirth}`;
  } else if (age >= 1001) {
    document.querySelector(
      ".result"
    ).innerHTML = `Hey, you are ${yourYearOfBirth} years old`;
  }else{
    document.querySelector(
      ".result"
    ).innerHTML = 'Kindly enter your age or year of birth';
  }
}
