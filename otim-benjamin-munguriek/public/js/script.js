const surname = document.querySelector("#surname");
const givenNames = document.getElementById("givenNames");
const dob = document.getElementById("dob");
const residence = document.getElementById("residence");
const occuptation = document.getElementById("occupation");
const nationality = document.getElementById("nationality");
const gender = document.getElementById("gender");
const category = document.getElementById("category");

let surnameGroup = surname.parentElement;
let givenNamesGroup = givenNames.parentElement;
let dobGroup = dob.parentElement;
let residenceGroup = residence.parentElement;
let occupationGroup = occuptation.parentElement;
let nationalityGroup = nationality.parentElement;
let genderGroup = gender.parentElement;
let categoryGroup = category.parentElement;

surname.addEventListener('click', function(){
    alert("Hello")
})


surname.onblur = function(){
    if(surname.value.length < 4 || surname.value.length > 10){
        surnameGroup.className += " error";
        const small = surnameGroup.querySelector('small');
        small.innerText = "Surname Must be Between 4 and 50 characters";
        surname.focus();
    } else{
        surnameGroup.classList.remove("error");
    }
}

