// Fuction that validates input fields

const registerValid=()=> {
    const surname=document.register.surname;
    const errorsName=document.getElementById("errorsName")
    let surnameRegex=/^[a-zA-Z]{5,50}$/;
    if(!surname.value.match(surnameRegex)){
        surname.style.border="1px solid red";
        errorsName.innerHTML = "This field is required!";
        errorsName.style.color="red";
        return false;
    }
    const gname=document.register.givenname;
    const errorgName=document.getElementById("errorgName")
    let gRegex=/^[a-zA-Z]{5,50}$/;
    if(!gname.value.match(gRegex)){
        gname.style.border="1px solid red";
        errorgName.innerHTML = "This field is required!";
        errorgName.style.color="red";
        return false;
    }
    const dob=document.register.dob;
    const errorDob=document.getElementById("errorDob")

    if(dob.value===""){
        surname.style.border="1px solid red";
        errorDob.innerHTML = "This field is required!";
        errorDob.style.color="red";
        return false;
    }
    const residence=document.register.residence;
    const errorResidence=document.getElementById("errorResidence")
    let resRegex=/^[a-zA-Z]{5,50}$/;
    if(!residence.value.match(resRegex)){
        residence.style.border="1px solid red";
        errorResidence.innerHTML = "Select a date!";
        errorResidence.style.color="red";
        return false;
    }

    const occupation=document.register.occupation;
    const errorOccupation=document.getElementById("errorOccupation")
    let occRegex=/^[a-zA-Z]{5,50}$/;
    if(!occupation.value.match(occRegex)){
        occupation.style.border="1px solid red";
        errorOccupation.innerHTML = "Select a date!";
        errorOccupation.style.color="red";
        return false;
    }
    const nationality=document.register.nationality;
    const errorNationality=document.getElementById("errorOccupation")
    let nationalityRegex=/^[a-zA-Z]{5,50}$/;
    if(!nationality.value.match(nationalityRegex)){
        nationality.style.border="1px solid red";
        errorNationality.innerHTML = "Select a date!";
        errorNationality.style.color="red";
        return false;
    }
    const gender=document.register.gender
    const errorCheck=document.getElementById("errorCheck")
    if(gender!=checked){
        gender.style.border="1px solid red";
        errorCheck.innerHTML = "Select a date!";
        errorCheck.style.color="red";
        return false;
    }

    

    const category=document.register.category
    const errorCat=document.getElementById("errorCat")
    if(category.value==""){
        category.style.border="1px solid red";
        errorCat.innerHTML = "This field is required!";
        errorCat.style.color="red";
        return false;
    }
    
    else{
        alert("Form validated");
    }
}