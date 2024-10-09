/*function validateForm() {
    
    const title = document.getElementById('title');
    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');   
  
    const price = document.getElementById('price');
  
    
    let isValid = true;
  
   
    if (title.value.length < 3) {
      Error_message('titleError', 'Title must be at least 3 characters long.');
      isValid = false;
    } else {
      displaySuccessMessage('titleError', 'Correct');
    }
  
    
    if (!/^[a-zA-Z ]+$/.test(destination.value) || destination.value.length < 3) {
      displayErrorMessage('destinationError', 'Destination must contain only letters and spaces and be at least 3 characters long.');
      isValid = false;
    } else {
      displaySuccessMessage('destinationError', 'Correct');
    }
  
    
    const departure = new Date(departureDate.value);
    const returnDateValue = new Date(returnDate.value);
    if (isNaN(departure) || isNaN(returnDateValue) || returnDateValue <= departure) {
      displayErrorMessage('departureDateError', 'Please select valid dates.');
      displayErrorMessage('returnDateError', 'Please select valid dates.');
      isValid = false;
    } else {
      displaySuccessMessage('departureDateError', 'Correct');
      displaySuccessMessage('returnDateError', 'Correct');
    }
  
    
    if (isNaN(price.value) || price.value <= 0) {
      displayErrorMessage('priceError', 'The price must be a positive number.');
      isValid = false;
    } else {
      displaySuccessMessage('priceError', 'Correct');
    }
  
    returndisplayErrorMessage isValid;
  }*/
  
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
  
  
  const form = document.getElementById('offerForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (buttonvalid()) {
      
      alert('Form submitted successfully');
    }
  });
  
  
  const title = document.getElementById('title');
  title.addEventListener('keyup', () => {
    validateTitle();
  });
  
  function validateTitle() {
    if (title.value.length >= 3) {
      displaySuccessMessage('titleError', 'Correct');
    } else {
      displayErrorMessage('titleError', 'Title must be at least 3 characters long.');
    }
  }
 /* document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    if (buttonvalidvalid()) {
      
      alert('Form submitted successfully!');
    }
  });*/

  function buttonvalid() {
    
    const title = document.getElementById('title');
    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');   
    const price = document.getElementById('price');
  
    
    let Valid = true;
  
    
    if (title.value.length < 3) {
      alert('Title must be at least 3 characters long.');
      Valid = false;
      return; 
    }
  
    
    if (!/^[a-zA-Z\s]$/.test(destination.value) || destination.value.length < 3) {
      alert('Destination must contain only letters and spaces and be at least 3 characters long.');
      Valid = false;
      return;
    }
  
    
    const departure = new Date(departureDate.value);
    const returnDateValue = new Date(returnDate.value);
    if (isNaN(departure) || isNaN(returnDateValue) || returnDateValue <= departure) {
      alert('Return date must be later than the departure date.');
      Valid = false;
      return;
    }
  
    
    if (isNaN(price.value) || price.value <= 0) {
      alert('Price must be a positive number.');
      Valid = false;
      return;
    }
  
    return Valid;
  }

 
  