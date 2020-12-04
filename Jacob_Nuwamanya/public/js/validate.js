// Some functions called in here are defined in validate_helpers.

//Function validates input elements before submission.
const validate = () => {
  let form =document.covidform;
  //Check surname input field.
    const surnameInput = form.surname;    
    var nameRegex = /^[a-zA-Z]{1,16}$/;
    if (!nameRegex.test(surnameInput.value.trim())) {
      insertAfter(
        errorMessage("This field is required. 1-16 Characters"),
        surnameInput
      );
      alertError(surnameInput);
      surnameInput.focus();
      return false;
    }

  //Check given name input field.
    const givenInput = form.given;
    const givenRegex=/^[a-zA-Z]{1,16}$/;
    if (!givenRegex.test(givenInput.value.trim())) {
      insertAfter(
        errorMessage("This field is required. 1-16 Characters"),
        givenInput
      );
      alertError(givenInput);
      givenInput.focus();
      return false;
    }
  
  //Check date of birth input.
    const dobInput = form.dob;
    if (dobInput.value == "") {
      insertAfter(errorMessage("Select a date of birth."), dobInput);
      alertError(dobInput);
      dobInput.focus();
      return false;
    }else {
      let dobYear = new Date(dobInput.value).getFullYear(),
        currentYear = new Date().getFullYear();
      if (currentYear - dobYear < 1 || currentYear-dobYear > 150) {
        insertAfter(
          errorMessage("Patient Must be between 1 - 150 years"),
          dobInput
        );
        alertError(dobInput);
        dobInput.focus();
        return false;
      }
    }
  
    // Check place of residence input.
    const placeInput = form.place;
    const placeRegex = /^[a-zA-Z]{1,20}$/;
    if (!placeRegex.test(placeInput.value.trim())) {
      insertAfter(errorMessage("This field is required. 1-20 Characters"), placeInput);
      alertError(placeInput);
      placeInput.focus();
      return false;
    }
    
    // Check occupation of residence input.
    const occupationInput = form.occupation;
    const occupationRegex = /^[a-zA-Z]{5,50}$/;
    if (!occupationRegex.test(occupationInput.value.trim())) {
      insertAfter(errorMessage("This field is required. 5-50 Characters"), occupationInput);
      alertError(occupationInput);
      occupationInput.focus();
      return false;
    }
    
    // Check nationality of residence input.
    const nationalityInput = form.nationality;
    const nationalityRegex = /^[a-zA-Z]{5,20}$/;
    if (!nationalityRegex.test(nationalityInput.value.trim())) {
      insertAfter(errorMessage("This field is required. 5-20 Characters"), nationalityInput);
      alertError(nationalityInput);
      nationalityInput.focus();
      return false;
    }
  
  //Check categories input.
    const selectInput = form.category
    if(selectInput.value=="default"){
      insertAfter(errorMessage("Select Patient Category."), selectInput);
      alertError(selectInput);
      selectInput.focus();
    return false;
    }

    // Disable button when all is clear to avoid double submission.
  let submitBtn = form.getElementsByClassName("submit")[0];
  submitBtn.disabled = true;
  submitBtn.textContent = "Please wait .....";

  // If all is clear trigger submit event on the form.
  form.requestSubmit();
};

// Add listener on the button.
let submitBtn = document.getElementsByClassName("submit")[0];
submitBtn.addEventListener("click",validate)



// Close the success message
let close = document.getElementsByClassName("close")[0];
close.addEventListener("click",function(event){
  // Access element and remove.
  let formContainer =document.querySelector(".form-container");
  let success =document.querySelector(".success");
formContainer.removeChild(success);

})