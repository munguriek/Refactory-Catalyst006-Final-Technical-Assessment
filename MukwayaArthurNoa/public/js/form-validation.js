window.onload = function (event) {
    var form = document.getElementsByName('registration')[0];
    form.addEventListener('submit', function (event) {
        var inputs = form.getElementsByTagName('input'), input, i;
        for (i = 0; i < inputs.length; i += 1) {
            input = inputs[i];
            if (input.type === 'text' && input.value.trim() === '') {
                event.preventDefault();
               
                return false;
            }
        }
    }, false);
  };

  const formreg = () => {
    const sur_name = document.registration.surname;
    const sur_error = document.getElementById("surnamenerror");
  
    let snameRegex = /^[A-Za-z]{1,16}$/;
    if (sur_name.value.match(snameRegex)) {
      
    } else {
      sur_name.style.border = "2px solid red";
      sur_error.innerHTML = "This field is required";
      surnamenerror.style.color = " red ";
     
    }

    const given_name = document.registration.givenname;
    const given_error = document.getElementById("givennerror");
  
    let gnameRegex = /^[A-Za-z]{1,16}$/;
    if (given_name.value.match(gnameRegex)) {
      
    } else {
      given_name.style.border = "2px solid red";
      given_error.innerHTML = "This field is required";
      givennerror.style.color = " red ";
     
    }

    const do_b = document.registration.dob;
    const dob_error = document.getElementById("doberror");
    if (do_b.value == "") {
      dob_error.innerHTML = "Select date of Birth";
      dob_error.style.color = "red";
   
    }

    const place_name = document.registration.place;
    const place_error = document.getElementById("placeerror");
  
    let pnameRegex = /^[A-Za-z]{1,20}$/;
    if (place_name.value.match(pnameRegex)) {
      
    } else {
      place_name.style.border = "2px solid red";
      place_error.innerHTML = "This field is required";
      placeerror.style.color = " red ";
     
    }

    const occupation_name = document.registration.occupation;
    const occupation_error = document.getElementById("occupationerror");
  
    let onameRegex = /^[A-Za-z]{5,50}$/;
    if (occupation_name.value.match(onameRegex)) {
      
    } else {
      occupation_name.style.border = "2px solid red";
      occupation_error.innerHTML = "This field is required";
      occupationerror.style.color = " red ";
     
    }

    const nation_name = document.registration.nationality;
    const nation_error = document.getElementById("nationalityerror");
  
    let nnameRegex = /^[A-Za-z]{5,20}$/;
    if (nation_name.value.match(nnameRegex)) {
      
    } else {
      nation_name.style.border = "2px solid red";
      nation_error.innerHTML = "This field is required";
      nationalityerror.style.color = " red ";
     
    }

    const category_ = document.registration.category;
    const category_error = document.getElementById("categoryerror");
    if (category_.value == "") {
      category_.style.border = "2px solid red";
      category_error.innerHTML = "Please select ward";
      category_error.style.color = "red";
     
    }
  
  }


