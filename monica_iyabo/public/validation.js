// Fuction that validates input fields

function registerValid() {
    const surname=document.regForm.surname;
    const errorsName=document.getElementById("errorsName")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!surname.value.match(surnameRegex)){
        surname.style.border="1px solid red";
        errorsName.innerHTML = "This field is required!";
        errorsName.style.color="red";
        return false;
    }
    const gname=document.regForm.givenname;
    const errorsName=document.getElementById("errorgName")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!gname.value.match(surnameRegex)){
        gname.style.border="1px solid red";
        errorgName.innerHTML = "This field is required!";
        errorgName.style.color="red";
        return false;
    }
    const dob=document.regForm.dob;
    const errorDob=document.getElementById("errorDob")

    if(dob.value===""){
        surname.style.border="1px solid red";
        errorDob.innerHTML = "This field is required!";
        errorDob.style.color="red";
        return false;
    }
    const residence=document.regForm.residence;
    const errorResidence=document.getElementById("errorResidence")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!residence.value.match(surnameRegex)){
        residence.style.border="1px solid red";
        errorResidence.innerHTML = "Select a date!";
        errorResidence.style.color="red";
        return false;
    }

    const occupation=document.regForm.occupation;
    const errorOccupation=document.getElementById("errorOccupation")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!occupation.value.match(surnameRegex)){
        occupation.style.border="1px solid red";
        errorOccupation.innerHTML = "Select a date!";
        errorOccupation.style.color="red";
        return false;
    }
    const nationality=document.regForm.nationality;
    const errorNationality=document.getElementById("errorOccupation")
    let nationalityRegex=/^[a-zA-Z]{5,50}$/;
    if(!nationality.value.match(nationalityRegex)){
        nationality.style.border="1px solid red";
        errorNationality.innerHTML = "Select a date!";
        errorNationality.style.color="red";
        return false;
    }
    
}