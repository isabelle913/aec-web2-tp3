const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const spotName = document.querySelector("#spotName");
const spotPhone = document.querySelector("#spotPhone");
const spotUrl = document.querySelector("#spotUrl");
const spotAddress = document.querySelector("#spotAddress");
const spotDescription = document.querySelector("#spotDescription");

const validateForm = () => {
 
  let noError = [];

  // Valider firstName
  if (firstName.value.trim() === "") {
    setError(firstName, "Veuillez inscrire votre prénom");
    noError.push(false);
  } else {
    setSuccess(firstName);
    noError.push(true);
  }

    // Valider lastName
  if (lastName.value.trim() === "") {
    setError(lastName, "Veuillez inscrire votre nom de famille");
    noError.push(false);
  } else {
    setSuccess(lastName);
    noError.push(true);
  }
     // Valider phone
  if (phone.value.trim() === "") {
    setError(phone, "Veuillez inscrire votre numéro de téléphone");
    noError.push(false);
  } else {
    setSuccess(phone);
    noError.push(true);
  }

  // valider courriel
  if (email.value.trim() === "") {
    setError(email, "Veuillez inscrire un courriel");
     noError.push(false);
  } else if (!validateEmail(email.value.trim())) {
    setError(email, "Veuillez inscrire un courriel valide");
     noError.push(false);
  } else {
    setSuccess(email);
    noError.push(true);
  }

   // Valider spotName
  if (spotName.value.trim() === "") {
    setError(spotName, "Veuillez inscrire le nom de l'endroit recommandé.");
    noError.push(false);
  } else {
    setSuccess(spotName);
    noError.push(true);
  }
    // Valider spotPhone
  if (spotPhone.value.trim() === "") {
    setError(spotPhone, "Veuillez inscrire le numéro de téléphone.");
    noError.push(false);
  } else {
    setSuccess(spotPhone);
    noError.push(true);
  }
    // Valider spotUrl
  if (spotUrl.value.trim() === "") {
    setError(spotUrl, "Veuillez inscrire le site web de cet endroit.");
    noError.push(false);
   } 
  //else if (!validateUrl(spotUrl.value.trim())) {
  //   setError(spotUrl, "Veuillez inscrire un url valide.");
  //    noError.push(false);
  // }
   else {
    setSuccess(spotUrl);
    noError.push(true);
  }
    // Valider spotAddress
  if (spotAddress.value.trim() === "") {
    setError(spotAddress, "Veuillez inscrire l'adresse.");
    noError.push(false);
  } else {
    setSuccess(spotAddress);
    noError.push(true);
  }
    // Valider spotDescription
  if (spotDescription.value.trim() === "") {
    setError(spotDescription, "Veuillez donner une description.");
    noError.push(false);
  } else {
    setSuccess(spotDescription);
    noError.push(true);
  }

  //console.log('noError', noError);
  if (noError.length === 9 && !noError.includes(false)) {
    console.log('9');
    return true;
  } else {
    return false;
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  // inputControl.classList.add("error");
  // inputControl.classList.remove("succes");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = "";
  // inputControl.classList.add("succes");
  // inputControl.classList.remove("error");
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};
const validateUrl = (value) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

