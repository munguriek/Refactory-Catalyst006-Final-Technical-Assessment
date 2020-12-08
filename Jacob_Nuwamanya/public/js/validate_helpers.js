//Function inserts element into the DOM.''
const insertAfter = (newElement, targetElement) => {
  var parent = targetElement.parentNode;
  if (parent.lastElementChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextElementSibling);
  }
};

//Function creates an error message to display
const errorMessage = (msg) => {
  //Create a small tag, add message.
  let small = document.createElement("small");
  small.className = "error";
  small.innerHTML = msg;
  return small;
};


//Function adds outline on input element that fails validation.
const alertError = (element) => {
  element.style.outline = "2px solid red";
};
