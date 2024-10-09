/* cette version est la version ou si on appuis sur le boutton addoffer tous les case non 
validéé vont avoir un message d'erreur */

function Success_message(Id, msg) {
    const element = document.getElementById(Id);
    element.textContent = msg;
    element.style.color = 'red';
  }
  
  function Error_message(Id, msg) {
    const element = document.getElementById(Id);
    element.textContent = msg;
    element.style.color = 'green';
  }

  function validerformulaire() {
    
    const title = document.getElementById('title');
    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate'); 
    const price = document.getElementById('price');
    const checkbox = document.getElementById('availability');
  
    
    let Valid = true;
  
   
    if (title.value.length < 3) {
      Error_message('titleError', 'le titre doit contenir au moins 3 charactères.');
      Valid = false;
    } else {
      Success_message('titleError', 'Correct');
    }
  
    
    if (!/^[a-zA-Z ]+$/.test(destination.value) || destination.value.length < 3) {
      Error_message('destinationError', 'Destination doit contenir au moins 3 charactères et forméé apar des lettres est des espaces.');
      Valid = false;
    } else {
      Success_message('destinationError', 'Correct');
    }


    if (returnDate.value <= departureDate.value) {
      Error_message('departureDateError', 'selectioner une date valide.');
      Error_message('returnDateError', 'selectioner une date valide..');
      Valid = false;
    } else {
      Success_message('departureDateError', 'Correct');
      Success_message('returnDateError', 'Correct');
    }
  
    
    if ( price.value <= 0) {
      Error_message('priceError', 'Price doit etre positive.');
      Valid = false;
    } else {
      Success_message('priceError', 'Correct');
    }
    // cette fonction verifie si le checkbox Availability is marqué 'checkded'(cette fonction est optionnel)
    if (!checkbox.checked){
        Error_message('checkboxError',' confirmer "availability"');
        Valid = false;
        return;
    }
    else{
        Success_message('checkboxError','Corret');
    }
  
    return Valid;
  }

  const form = document.getElementById('offerForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validerformulaire()) {
      
      alert('sucessss!!!!');
    }
  });