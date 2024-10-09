/* cette version est la version ou si on appuis sur le boutton addoffer et une case est non valid
la premiere case non versifiiéé sera affcher avec un alert*/

  function verifierformulaire() {
    
    const title = document.getElementById('title');
    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departureDate');
    const returnDate = document.getElementById('returnDate');  
    const price = document.getElementById('price');
    //const checkbox = document.getElementById('availability');
  
    
    let Valid = true;
  
    
    if (title.value.length < 3) {
      alert('le titre doit contenir au moins 3 charactères.');
      Valid = false;
      return; 
    }
  
    //cette version du pattern = /^[a-zA-Z ]$/ accept les espace aussi
    
    if (!/^[a-zA-Z ]{3,}$/.test(destination.value)) {
      alert('Destination doit contenir au moins 3 charactères et forméé apar des lettres est des espaces.');
      Valid = false;
      return;
    }
  


    if (!departureDate.value || !returnDate.value) {
      alert('veuillez sélectionner les deux date.');
      Valid = false;
      return;
    }
    if (returnDate.value <= departureDate.value) {
      alert('Date de retour doit etre plus tard que la date de depart.');
      Valid = false;
      return;
    }
  
    
    if ( price.value <= 0) {
      alert('Price doit etre positive.');
      Valid = false;
      return;
    }

    
    // cette fonction verifie si le checkbox Availability is marqué 'checkded' (optionnel)
    /*if (!checkbox.checked){
      alert('selectionner le box pour valider');
      Valid = false;
      return;
    }*/

    return Valid;
    
  
    
  }
function validerformulaire() {
  if (verifierformulaire() ){
    alert('sucessful submission!!!!!');
  }

}