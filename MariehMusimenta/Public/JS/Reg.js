//declaring a constant = pugfile.formname.feildname

const SURNAME = document.coronavirus.surname;
//const GIVENNAME = document.coronavirus.givenname;
// const RESIDENCE = document.coronavirus.residence;
// const OCCUPATION = document.coronavirus.occupation;
// const NATIONALITY = document.coronavirus.nationality;

// //Error Display
 const sname_error = document.getElementById("Sname");
// const Gname_error = document.getElementById("Gname");
// const Residence_error = document.getElementById("Residence");
// const Occupation_error= document.getElementById("Ocupation");
// const Nationality_error = document.getElementById("Nationality");



//Event Listners
// //these check correct inputname and change the color to orange.
 surname.addEventListener("blur", surname_Verify, true);
// givenname.addEventListener("blur", givenname_Verify, true);
// residence.addEventListener("blur", residence_Verify, true);
// occupation.addEventListener("blur", occupation_Verify, true);
// nationality.addEventListener("blur", nationality_Verify, true);

//validations
// basically elimate empty fields submit
function Validate() {
  //surname validation
  if (SURNAME.value == "") {
    SURNAME.style.border = "1px solid red";
    sname_error.textContent = "Surname is required";
    SURNAME.focus();
    return false;
  }
//   //givenname validation
//   if (GIVENNAME.value == "default") {
//     GIVENNAME.style.border = "1px solid red";
//     Gname_error.textContent = "givenname is required ";
//     GIVENNAME.focus();
//     return false;
//   }
//   //RESIDENCE validation
//   //getting idnum from eventlisteners then idnumber_error from error display .
//   if (RESIDENCE.value == "") {
//     RESIDENCE.style.border = "1px solid red";
//     Residence_error.textContent = "residence is required";
//     RESIDENCE.focus();
//     return false;
//   }
//   //Occupation validation
//   if (OCCUPATION.value == "") {
//     OCCUPATION.style.border = "1px solid red";
//     Occupation_error.textContent = "occupation is required";
//     OCCUPATION.focus();
//     return false;
//   }
//   //nationality validation
//   if (NATIONALITY.value == "default") {
//     NATIONALITY.style.border = "1px solid red";
//     Nationality_error.textContent = "Nationality is required";
//     NATIONALITY.focus();
//     return false;
//   }
  
// //Event Handlers
// // if its the correct value display color
// // declared valuable name

  const SURNAMEr = /^.{1,16}[a-zA-Z]+$/;
// const GIVENNAMEr = /^.{1,16}[a-zA-Z]+$/;
// const RESIDENCEr =/^.{1,20}[a-zA-Z]+$/;
// const  OCCUPATIONr= /^.{550}[a-zA-Z]+$/;
// const NATIONALITYr=/^.{5,20}[a-zA-Z]+$/;

function surname_Verify() {
  if (SURNAME.value != "" && SURNAME.value.match(SURNAMEr)) {
    SURNAME.style.border = "1px solid #ffc107";
    sname_error.innerHTML = "";
    return true;
  } else {
    SURNAME.style.border = "1px solid red";
    sname_error.textContent = "Surname should be between 1-16 characters";
    return false;
  }
}

// function givenname_Verify() {
//   if (GIVENNAME.value != ""&& GIVENNAME.value.match(GIVENNAMEr)) {
//     GIVENNAME.style.border = "1px solid #ffc107";
//     Gname_error.innerHTML = "";
//     return true;
//   }
// }
// }
