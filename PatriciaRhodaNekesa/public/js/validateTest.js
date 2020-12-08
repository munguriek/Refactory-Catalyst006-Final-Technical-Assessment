    // Access Elements in signup form
    const regForm = document.getElementById("form")
    const surname     = document.getElementById("surname");
    const givenname  = document.getElementById("givenname");
    const dob  = document.getElementById("dob");
    const reside       =  document.getElementById("residence")
    const occupation       =  document.getElementById("occupation")
    const nationality      =  document.getElementById("nationality")
    const category      =  document.getElementById("category")

    regForm.addEventListener('submit', (event) =>{
        // event.preventDefault();

        checkInput();
    });

    function checkInput() {
        //get the values from the inputs
        const surnamevalue = surname.value.trim();
        const givennamevalue = givenname.value.trim();
        const dobvalue = dob.value.trim();
        const residencevalue = reside.value.trim();
        const occupationvalue = occupation.value.trim();
        const nationalityvalue = nationality.value.trim();
        const categoryvalue = category.value.trim();

        //Regex
        let name = /^[A-Za-z]{1,16}/;
        let residence = /^[A-Za-z]{1,20}/;
        let occupance = /^[A-Za-z]{5,50}/;
        let nation = /^[A-Za-z]{5,20}/;

        // let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
        // //let nin = /^[0-9a-zA-Z]{13}+$/
        // let pass = /^\w{7,12}$/;


        if(surnamevalue === ''){
            setErrorFor(surname, "This field is required");
            return false;
        }
        else if(!surnamevalue.match(name)){
            setErrorFor(surnamevalue, "Provide a valid name with 1-16  alphabet characters");
            return false;
        }    
         else{
            setSuccessFor(surname);

        };

        if(givennamevalue === ''){
            setErrorFor(givenname, "This field is required");
            return false;
        }
        else if(!givennamevalue.match(name)){
            setErrorFor(givenname, "Provide a valid given name with  1-16 alphabetcharacters");
            return false;
        }   
         else{
            setSuccessFor(givenname);
        };

        if(dobvalue=== ''){

            setErrorFor(dob, "Select Date Of Birth");
            return false;
        }
        // }else if(!passwordvalue.match(pass)){
        //     setErrorFor(password, "Password must have atleast one Number and 7 characters");
        //     return false;
        // }
         else{
            setSuccessFor(dob);
        };

        if(residencevalue === ''){
            setErrorFor(reside, "This field is required");
            return false;
        }
        else if(!residencevalue.match(residence)){
            setErrorFor(reside, "Provide a valid place of residence");
            return false;
        }   
         else{
            setSuccessFor(reside);
        };

        if(occupationvalue === ''){
            setErrorFor(occupation, "This field is required");
            return false;
        }
        else if(!occupationvalue.match(occupance)){
            setErrorFor(occupation, "Provide a valid occupation");
            return false;
        }   
         else{
            setSuccessFor(occupation);
        };

        if(nationalityvalue === ''){
            setErrorFor(nationality, "This field is required");
            return false;
        }
        else if(!nationalityvalue.match(nation)){
            setErrorFor(nationality, "Provide a valid nationality");
            return false;
        }   
         else{
            setSuccessFor(nationality);
        };

        if(categoryvalue==="Select category"){
            setErrorFor(category, "Select Patient Category");
            return false;
        }
        else{
            setSuccessFor(category);
        }
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');
        formControl.className = "form-control error";
        small.innerHTML = message;
        
    }

    function setSuccessFor(input){
        const formcontrol = input.parentElement;
        formcontrol.className = "form-control success";

    }   
 



//Project Conditions
//  • Username should be alphanumeric and not empty
// • All names should be strings between 5 to 50 characters
// • NiN should be 13 alphanumeric characters
// • Prices are in Ugx
// • Younger than 10 years old should not be registered as farmerOne, urban farmers etc
// • No form should be submitted when empty..chech