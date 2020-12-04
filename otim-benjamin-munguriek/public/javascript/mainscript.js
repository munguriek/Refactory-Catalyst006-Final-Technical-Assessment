const surname = document.getElementById("surname");
const givenNames = document.getElementById("givenNames");
const dob = document.getElementById("dob");
const residence = document.getElementById("residence");
const occuptation = document.getElementById("occupation");
const nationality = document.getElementById("nationality");
const gender = document.getElementById("gender");
const category = document.getElementById("category");
const form = document.getElementById("form");



let surnameGroup = surname.parentElement;
let givenNamesGroup = givenNames.parentElement;
let dobGroup = dob.parentElement;
let residenceGroup = residence.parentElement;
let occupationGroup = occuptation.parentElement;
let nationalityGroup = nationality.parentElement;
let genderGroup = gender.parentElement;
let categoryGroup = category.parentElement;

const alphaNumeric = /^[0-9a-zA-Z]+$/;


surname.onblur = function(){
    if(surname.value.length < 2 || surname.value.length > 17){
        surnameGroup.className += " error";
        surname.className += " is-invalid"
        const small = surnameGroup.querySelector('small');
        small.innerText = "Surname Must be Between 2 and 16 characters";
        surname.focus();
    } else if (!(surname.value.match(alphaNumeric))){
        surnameGroup.className += " error";
        const small = surnameGroup.querySelector('small');
        small.innerText = "Surname has to contain letters and numbers only";
        surname.focus();
    } else {
        surnameGroup.classList.remove("error");
        surname.classList.remove("is-invalid");
        surname.className += " is-valid"
    }
}

givenNames.onblur = function(){
    if(givenNames.value.length < 2 || givenNames.value.length > 17){
        givenNamesGroup.className += " error";
        givenNames.className += " is-invalid"
        const small = givenNamesGroup.querySelector('small');
        small.innerText = "Given Name Must be Between 2 and 16 characters";
        givenNames.focus();
    } else if (!(givenNames.value.match(alphaNumeric))){
        givenNamesGroup.className += " error";
        const small = givenNamesGroup.querySelector('small');
        small.innerText = "Given Name has to contain letters and numbers only";
        givenNames.focus();
    } else {
        givenNamesGroup.classList.remove("error");
        givenNames.classList.remove("is-invalid");
        givenNames.className += " is-valid"
    }
}

residence.onblur = function(){
    if(residence.value.length < 2 || residence.value.length > 21){
        residenceGroup.className += " error";
        residence.className += " is-invalid"
        const small = residenceGroup.querySelector('small');
        small.innerText = "Residence Must be Between 2 and 20 characters";
        residence.focus();
    } else if (!(residence.value.match(alphaNumeric))){
        residenceGroup.className += " error";
        const small = residenceGroup.querySelector('small');
        small.innerText = "Residence Has to contain letters and numbers only";
        residence.focus();
    } else {
        residenceGroup.classList.remove("error");
        residence.classList.remove("is-invalid");
        residence.className += " is-valid"
    }
}


occupation.onblur = function(){
    if(occupation.value.length < 7 || occupation.value.length > 51){
        occupationGroup.className += " error";
        occupation.className += " is-invalid"
        const small = occupationGroup.querySelector('small');
        small.innerText = "Occupation Must be Between 7 and 51 characters";
        occupation.focus();
    } else if (!(occupation.value.match(alphaNumeric))){
        occupationGroup.className += " error";
        const small = occupationGroup.querySelector('small');
        small.innerText = "Occupation Has to contain letters and numbers only";
        occupation.focus();
    } else {
        occupationGroup.classList.remove("error");
        occupation.classList.remove("is-invalid");
        occupation.className += " is-valid"
    }
}

nationality.onblur = function(){
    if(nationality.value.length < 2 || nationality.value.length > 17){
        nationalityGroup.className += " error";
        nationality.className += " is-invalid"
        const small = nationalityGroup.querySelector('small');
        small.innerText = "Must be Between 2 and 16 characters";
        nationality.focus();
    } else if (!(nationality.value.match(alphaNumeric))){
        nationalityGroup.className += " error";
        const small = nationalityGroup.querySelector('small');
        small.innerText = "Has to contain letters and numbers only";
        nationality.focus();
    } else {
        nationalityGroup.classList.remove("error");
        nationality.classList.remove("is-invalid");
        nationality.className += " is-valid"
    }
}


category.onblur = function(){
    if(category.value == ""){
        categoryGroup.className += " error";
        category.className += " is-invalid"
        const small = categoryGroup.querySelector('small');
        small.innerText = "Select Patient Category";
        category.focus();
    }  else {
        categoryGroup.classList.remove("error");
        category.classList.remove("is-invalid");
        category.className += " is-valid"
    }
}


