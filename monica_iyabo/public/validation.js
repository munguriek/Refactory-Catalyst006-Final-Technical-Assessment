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
        errorsName.innerHTML = "This field is required!";
        errorsName.style.color="red";
        return false;
    }
    const dob=document.regForm.dob;
    const errorDob=document.getElementById("errorDob")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!surname.value.match(surnameRegex)){
        surname.style.border="1px solid red";
        errorsName.innerHTML = "This field is required!";
        errorsName.style.color="red";
        return false;
    }
    
    
}