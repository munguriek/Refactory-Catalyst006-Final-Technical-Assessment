const validateForm = ()=>{
    const surname = document.regform.surname;
    const givenname = document.regform.givenname;
    const dob = document.regform.dob;
    const residence = document.regform.residence;
    const occupation = document.regform.occupation;
    const nationality = document.regform.nationality;
    const gen = document.regform.gen;
    const category = document.regform.category

    const sregex = /^[A-Za-z]{1,16}$/;
    const snameError =document.getElementById('snameError')
    if(!surname.value.match(sregex)){
        snameError.innerHTML = "This field is required"
        snameError.style.color = "red"
        surname.style.border = "2px solid red"
    return false;
    }

    const gregex = /^[A-Za-z]{1,16}$/;
    const gnameError =document.getElementById('gnameError')
    if(!givenname.value.match(gregex)){
        gnameError.innerHTML = "This field is required"
        gnameError.style.color = "red"
        givenname.style.border = "2px solid red"
    return false;
    }

    const dobError = document.getElementById('dobError')
    if(dob.value == ""){
        dobError.innerHTML = "Select Date of Birth";
        dobError.style.color = "red";
        dob.style.border = "2px solid red";
    return false;
        }

    // const dobError = document.getElementById('dobError') 
    // let bday = new Date(dob.value),
    // bday = bday.getFullYear();
    // currentYear = new Date().getFullYear()
    // if(currentYear - bday <0>150){
    //     dobError.innerHTML = "Should be between 1 to 150 years old";
    //     dobError.style.color = "red";
    //     dob.style.border = "2px solid red";
    // return false;
    //     }
  
    const resiError = document.getElementById('resiError')
    if(residence.value == ""){
        resiError.innerHTML = "This field is required";
        resiError.style.color = "red";
        residence.style.border = "2px solid red";
    return false;
        }

    const occError = document.getElementById('occError')
    if(occupation.value == ""){
        occError.innerHTML = "This field is required";
        occError.style.color = "red";
        occupation.style.border = "2px solid red";
    return false;
        }
    
    const natError = document.getElementById('natError')
    if(nationality.value == ""){
        natError.innerHTML = "This field is required";
        natError.style.color = "red";
        nationality.style.border = "2px solid red";
    return false;
        }

const genError = document.getElementById('genError')
if(
    gen["Male"].checked == false &&
    gen["Female"].checked == false 
    
)
{
    genError.innerHTML ="Please check atleast one activity before you proceed"
    genError.style.color ="red"
    gen.style.border = "2px solid red"
    return false;
}

const catError = document.getElementById('catError')
    if(category.value == ""){
        catError.innerHTML = "Select patient category";
        catError.style.color = "red";
        category.style.border = "2px solid red";
    return false;
        }
else{
    alert('Registration was successful!')
    return true;
}
}