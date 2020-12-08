// Get the form.
const form = document.getElementsByTagName('form')[0];

// Get the fields.
document.getElementById('surname').required = true;
document.getElementById('givenName').required = true;
document.getElementById('birthDate').required = true;
document.getElementById('residence').required = true;
document.getElementById('occupation').required = true;
document.getElementById('nationality').required = true;
document.getElementById('category').required = true;

// Get the span element to output the error message.
const surnameError = document.querySelector('#surname + span.error');
const givenNameError = document.querySelector('#givenName + span.error');
const birthDateError = document.querySelector('#birthDate + span.error');
const residenceError = document.querySelector('#residence + span.error');
const occupationError = document.querySelector('#occupation + span.error');
const nationalityError = document.querySelector('#nationality + span.error');
const categoryError = document.querySelector('#category + span.error');

// Check if surname is valid
surname.addEventListener('input', function (event) {
  if (surname.validity.valid) {
    // if the input is valid, remove the error message.
    surnameError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    surnameError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if givenName is valid
givenName.addEventListener('input', function (event) {
  if (givenName.validity.valid) {
    // if the input is valid, remove the error message.
    givenNameError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    givenNameError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if birthDate is valid
birthDate.addEventListener('input', function (event) {
  if (birthDate.validity.valid) {
    // if the input is valid, remove the error message.
    birthDateError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    birthDateError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if residence is valid
residence.addEventListener('input', function (event) {
  if (residence.validity.valid) {
    // if the input is valid, remove the error message.
    residenceError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    residenceError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if occupation is valid
occupation.addEventListener('input', function (event) {
  if (occupation.validity.valid) {
    // if the input is valid, remove the error message.
    occupationError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    occupationError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if nationality is valid
nationality.addEventListener('input', function (event) {
  if (nationality.validity.valid) {
    // if the input is valid, remove the error message.
    nationalityError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    nationalityError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Check if category is valid
category.addEventListener('input', function (event) {
  if (category.validity.valid) {
    // if the input is valid, remove the error message.
    categoryError.innerHTML = '';
    // if the input is invalid, reset the content of the error message.
    categoryError.className = 'error';
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

// Output suitable error message for invalid input
var showError = () => {

  // Surname
  if (surname.validity.valueMissing) {
    surnameError.textContent = 'This field is required.';
    surname.style.border = 'solid 1px red';
  } else if (!surname.value.match(/^[A-Za-z]+$/)) {
    surnameError.textContent = 'surname should be alphabet';
  } else if (surname.validity.tooShort) {
    surnameError.textContent = `surname should be at least ${surname.minLength} alphabet characters`;
  }
  // Given Name
  if (givenName.validity.valueMissing) {
    givenNameError.textContent = 'This field is required.';
    givenName.style.border = 'solid 1px red'
  } else if (!givenName.value.match(/^[A-Za-z]+$/)) {
    //givenNameError.textContent = 'givenName should be alphabet';
  } else if (givenName.validity.tooShort) {
    givenNameError.textContent = `givenName should be at least ${givenName.minLength} alphabet characters`;
  }
  // Date of birth
  if (birthDate.validity.valueMissing) {
    birthDateError.textContent = 'Select Date of Birth.';
    birthDate.style.border = 'solid 1px red'
  }
  // Place of residence
  if (residence.validity.valueMissing) {
    residenceError.textContent = 'This field is required.';
    residence.style.border = 'solid 1px red'
  } else if (!residence.value.match(/^[A-Za-z]+$/)) {
    residenceError.textContent = 'residence should be alphabet';
  } else if (residence.validity.tooShort) {
    residenceError.textContent = `residence should be at least ${residence.minLength} alphabet characters`;
  }
  // Occupation
  if (occupation.validity.valueMissing) {
    occupationError.textContent = 'This field is required.';
    occupation.style.border = 'solid 1px red'
  } else if (!occupation.value.match(/^[A-Za-z]+$/)) {
    occupationError.textContent = 'occupation should be alphabet';
  } else if (occupation.validity.tooShort) {
    occupationError.textContent = `occupation should be at least ${occupation.minLength} alphabet characters`;
  }
  // Nationality
  if (nationality.validity.valueMissing) {
    nationalityError.textContent = 'This field is required.';
    nationality.style.border = 'solid 1px red'
  } else if (!nationality.value.match(/^[A-Za-z]+$/)) {
    nationalityError.textContent = 'nationality should be alphabet';
  } else if (nationality.validity.tooShort) {
    nationalityError.textContent = `nationality should be at least ${nationality.minLength} alphabet characters`;
  }
  // Category
  if (category.validity.valueMissing) {
    categoryError.textContent = 'Select Patient Category.';
    category.style.border = 'solid 1px red'
  }

}