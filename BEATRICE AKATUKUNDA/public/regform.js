const validateRegForm = () => {
    const surName = document.registration.surname;
    const givenName = document.registration.given_name;
    //const dateOfBirth = document.registration.dob;
    const residencePlace = document.registration.residence;
    const oCcupation = document.registration.occupation;
    const nationality = document.registration.nationality;
    const genderM = document.getElementById("sexM");
    const genderF = document.getElementById("sexF");
    //const categorySelect = document.registration.select;


    let nameRegex = /^[a-zA-Z]{1,16}$/;
    if (nameRegex.test(surName.value) == true) {
        alert("Valid surname has been used");
        surName.style.border = "1px solid green";
    } else {
        alert("This field is required");
        surName.style.border = "1px solid red";
    }

    let givenNameRegex = /^[a-zA-Z]{1,16}$/;
    if (givenNameRegex.test(givenName.value) == true) {
        alert("Valid input has been used");
        givenName.style.border = "1px solid green";
    } else {
        alert("This field is required");
        givenName.style.border = "1px solid red";
    }

    let residenceRegex = /^[a-zA-Z]{1,20}$/;
    if (residenceRegex.test(residencePlace.value) == true) {
        alert("Valid input has been used");
        residencePlace.style.border = "1px solid green";
    } else {
        alert("This field is required");
        residencePlace.style.border = "1px solid red";
    }

    let occupationRegex = /^[a-zA-Z]{1,16}$/;
    if (occupationRegex.test(oCcupation.value) == true) {
        alert("Valid input has been used");
        oCcupation.style.border = "1px solid green";
    } else {
        alert("This field is required");
        oCcupation.style.border = "1px solid red";
    }

    let nationalityRegex = /^[a-zA-Z]{5,20}$/;
    if (nationalityRegex.test(nationality.value) == true) {
        alert("Valid surname has been used");
        nationality.style.border = "1px solid green";
    } else {
        alert("This field is required");
        nationality.style.border = "1px solid red";
    }

    let nationalityRegex = /^[a-zA-Z]{5,20}$/;
    if (nationalityRegex.test(nationality.value) == true) {
        alert("Valid surname has been used");
        nationality.style.border = "1px solid green";
    } else {
        alert("This field is required");
        nationality.style.border = "1px solid red";
    }

    if (genderM.checked == false && genderF.checked == false) {
        alert("Please select your gender");
    }

}

