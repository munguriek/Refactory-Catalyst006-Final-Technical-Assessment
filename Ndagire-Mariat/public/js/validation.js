let form=document.getElementById="regform";
let surname=document.getElementById("surname");
let givenname=document.getElementById("givenname");
let dob=document.getElementById("dob");
let place=document.getElementById("place");
let occupation=document.getElementById("occupation");
let nation=document.getElementById("nation");
let gender=document.getElementById("gender");
let category=document.getElementById("category");
let serr=document.getElementById("serr");
let gerr=document.getElementById("gerr");
let doberr=document.getElementById("doberr");
let placeerr=document.getElementById("placeerr");
let occuerr=document.getElementById("occuerr");
let naterr=document.getElementById("naterr");
let caterr=document.getElementById("caterr");


  const regex = /^[A-Za-z]+$/;


function validate(){
    if(surname.value==" "){
    surname.style.border="1px solid red";
    serr.innerHTML="* This field is required";
    serr.style.color="red"
    serr.style.fontFamily="sans-serif"
    surname.focus();
    return false;
}
if(surname.value.length>16){
    surname.style.border="1px solid red";
    serr.innerHTML="* Surname should not be longer than 16 characters";
    serr.style.color="red"
    serr.style.fontFamily="sans-serif"
    surname.focus();
    return false;
}
if(givenname.value==" "){
    givenname.style.border="1px solid red";
    gerr.innerHTML="* This field is required";
    gerr.style.color="red"
    gerr.style.fontFamily="sans-serif"
    givenname.focus();
    return false;
}
if(givenname.value.length>16){
    givenname.style.border="1px solid red";
    gerr.innerHTML="* Surname should not be longer than 16 characters";
    gerr.style.color="red"
    gerr.style.fontFamily="sans-serif"
    givenname.focus();
    return false;
}

if(place.value==" "){
    place.style.border="1px solid red";
    placeerr.innerHTML="* This field is required";
    placeerr.style.color="red"
    placeerr.style.fontFamily="sans-serif"
    place.focus();
    return false;
}
if(place.value.length>20){
    place.style.border="1px solid red";
    placeerr.innerHTML="* Surname should not be longer than 16 characters";
    placeerr.style.color="red"
    placeerr.style.fontFamily="sans-serif"
    place.focus();
    return false;
}

if(occupation.value== " "){
    occupation.style.border="1px solid red";
    occuerr.innerHTML="* This field is required";
    occuerr.style.color="red"
    occuerr.style.fontFamily="sans-serif"
    occupation.focus();
    return false;
}
if(occupation.value.length>50 || occupation.value.length<5){
    occupation.style.border="1px solid red";
    occuerr.innerHTML="* This field is required";
    occuerr.style.color="red"
    occuerr.style.fontFamily="sans-serif"
    occupation.focus();
    return false;
}
if(nation.value==" "){
    naterr.style.border="1px solid red";
    naterr.innerHTML="* nationality is required";
    naterr.style.color="red"
    naterr.style.fontFamily="sans-serif"
    nation.focus();
    return false;
}

if(nation.value.length>20 || nation.value.length<5){
    naterr.style.border="1px solid red";
    naterr.innerHTML="* nationality should not be longer than 16 characters";
    naterr.style.color="red"
    naterr.style.fontFamily="sans-serif"
    nation.focus();
    return false;
}
return (true)

}


