//VALIDATION FUNCTION FOR FARMER ONE REGISTRATION FORM
const regForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = document.regForm;
    const surname = form.surname;
    const givenName = form.givenName;
    const dob = form.dob;
    const residence = form.residence;
    const occupation = form.occupation;
    const nationality = form.nationality;
    const patientCategory = form.patientCategory;

   
    //Validate Surname
    let surnameRegex = /^[A-Za-z ]{1,16}$/;
    let surnameErr = document.getElementById("surnameErr");
    if (surnameRegex.test(surname.value) == false) {
      surnameErr.innerHTML = "* This field is required";
      surnameErr.style.color = "red";
      surname.style.border = "2px solid red";
      return false;
    } 
  
    //Validate Given Name.
    let givenNameRegex = /^[A-Za-z ]{1,16}$/;
    let givenNameErr = document.getElementById("givenNameErr");
    if (givenNameRegex.test(givenName.value) == false) {
      givenNameErr.innerHTML = "* This field is required";
      givenNameErr.style.color = "red";
      givenName.style.border = "2px solid red";
      return false;
    } 

  
    //Validate Date of Birth, input should not be left empty, should be at least 1 yr old but not more tha  150yrs
    let dobErr = document.getElementById("dobErr");
    let date = new Date(dob.value),
      birthYear = date.getFullYear(),
      currentYear = new Date().getFullYear();
    if (dob.value == "" || currentYear - birthYear < 1 || currentYear - birthYear > 150) {
      dobErr.innerHTML = "* Select Date of Birth";
      dobErr.style.color = "red";
      dob.style.border = "2px solid red";
      return false;
    } 


   //Validate Residence
   let residenceRegex = /^[A-Za-z ]{1,20}$/;
   let residenceErr = document.getElementById("residenceErr");
   if (residenceRegex.test(residence.value) == false) {
     residenceErr.innerHTML = "* This field is required";
     residenceErr.style.color = "red";
     residence.style.border = "2px solid red";
     return false;
   } 
  
  //Validate Occupation
  let occupationRegex = /^[A-Za-z ]{5,50}$/;
  let occupationErr = document.getElementById("occupationErr");
  if (occupationRegex.test(occupation.value) == false) {
    occupationErr.innerHTML = "* This field is required";
    occupationErr.style.color = "red";
    occupation.style.border = "2px solid red";
    return false;
  } 

//Validate Nationality
let nationalityRegex = /^[A-Za-z ]{5,20}$/;
let nationalityErr = document.getElementById("nationalityErr");
if (nationalityRegex.test(nationality.value) == false) {
  nationalityErr.innerHTML = "* This field is required";
  nationalityErr.style.color = "red";
  nationality.style.border = "2px solid red";
  return false;
} 
  
    //Validate category - a ward must be selected
    let patientCategoryErr = document.getElementById("patientCategoryErr");
    if (patientCategory.value == "Default") {
      patientCategoryErr.innerHTML = "*Select Patient Category";
      patientCategoryErr.style.color = "red";
      patientCategory.style.border = "2px solid red";
      return false;
    } 
  
    let anchor = document.getElementById("regForm");
    let regbutton = anchor.getElementsByTagName("input")[0];
    regbutton.disabled = true;
    form.requestSubmit();
    

  };

    let anchor = document.getElementById("regForm");
    anchor.addEventListener("click", regForm, );
    

  //   const  successAlert = ()=>{
  //     let alertBTN = document.getElementById("alertSuccess").setAttribute("class", "aria-hidden");;
  //     alertBTN.preventDefault();
  // }
    // const successAlert = (event)=>{
  //   event.preventDefault();
  //   let anchor = document.getElementById("alertSuccess");
  //   anchor.disabled=true;
  // }
  // let alertBTN = document.getElementById("alertSuccess");
  // alertBTN.addEventListener("submit", successAlert);

