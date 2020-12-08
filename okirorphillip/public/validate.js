function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function register(){
    var surname = document.mydata.surname.value;
    var givenname = document.mydata.givenname.value;
    var bd = document.mydata.bd.value;
    var place = document.mydata.place.value;
    var occupation = document.mydata.occupation.value;
    var nationality = document.mydata.nationality.value;
    var gender = document.mydata.gender.value;
    var category = document.mydata.category.value;

    // ___ Defining error varriables with defaul value
    var surname_err = givenname_err  = bd_err = place_err = occupation_err = nationality_err = gender_err = category_err = true;

    // _______ validating surname name
    if(surname === ""){
        printError("surname_err", "This field is required");
        const errId = document.getElementById('surname');
        errId.style.border = '1px solid red';
    }
    else  if(surname.length > 16){
        printError("surname_err", "Surname should be 1-16 characters");
        const errId = document.getElementById('surname');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(surname) === false){
            printError("surname_err", "Please Enter a Valid Name");
            const errId = document.getElementById('surname');
            errId.style.border = '1px solid red';
        }else{
            printError("surname_err", "");
            surname_err = false;
        }
    }
   
    // __________ Validating Given name
    if(givenname === ""){
        printError("givenname_err", "This field is requiredy");
        const errId = document.getElementById('givenname');
        errId.style.border = '1px solid red';
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(givenname) === false){
            printError("givenname_err", "Please Enter a Valid Name")
            const errId = document.getElementById('givenname');
            errId.style.border = '1px solid red';
        }else{
            printError("givenname_err", "");
            givenname_err = false;
        }
    }

     // _______ validating Date of Birth
     if(bd === ""){
        printError("bd_err", "This field is required");
        const errId = document.getElementById('bd');
        errId.style.border = '1px solid red';
    }else{
        printError("bd_err", "");
        bd_err = false;
    }

     // _______ validating Residnce
     if(place === ""){
        printError("place_err", "This field is required");
        const errId = document.getElementById('place');
        errId.style.border = '1px solid red';
    }
    else  if(place.length > 20){
        printError("place_err", "Residence length(1-20 characters)");
        const errId = document.getElementById('place');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(place) === false){
            printError("place_err", "Please Enter a Valid location")
            const errId = document.getElementById('place');
            errId.style.border = '1px solid red';
        }else{
            printError("place_err", "");
            place_err = false;
        }
    }

    // _______ validating occupation
    if(occupation === ""){
        printError("occupation_err", "This field is required");
        const errId = document.getElementById('occupation');
        errId.style.border = '1px solid red';
    }
    else  if(occupation.length < 5 || occupation.length > 50){
        printError("occupation_err", "Occupation length should be 5-20 characters");
        const errId = document.getElementById('occupation');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(occupation) === false){
            printError("occupation_err", "Please Enter a Valid Occupation")
            const errId = document.getElementById('occupation');
            errId.style.border = '1px solid red';
        }else{
            printError("occupation_err", "");
            occupation_err = false;
        }
    }
     // _______ validating nationality
     if(nationality === ""){
        printError("nationality_err", "This field is required");
        const errId = document.getElementById('nationality');
        errId.style.border = '1px solid red';
    }
    else  if(nationality.length < 5 || nationality.length > 20){
        printError("nationality_err", "Nationality should be between 5-20 characters");
        const errId = document.getElementById('nationality');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(nationality) === false){
            printError("nationality_err", "Please Enter a Valid nationality")
            const errId = document.getElementById('nationality');
        errId.style.border = '1px solid red';
        }else{
            printError("nationality_err", "");
            nationality_err = false;
        }
    }

    // _____ Validating gender
    if(gender === ""){
        printError("gender_err", "This field is required");
    }else{
        printError("gender_err", "");
        gender_err = false;
    }
       
     // _______ validating category
     if(category === "-- Select Category --"){
        printError("category_err", "This field is required");
        const errId = document.getElementById('category');
        errId.style.border = '1px solid red';
    }else{
        printError("category_err", "");
        category_err = false;
    }
    
    // _______ Preventing the form from being submited if their are any errors
    if((surname_err || givenname_err  || bd_err || place_err || occupation_err || nationality_err || gender_err || category_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
}