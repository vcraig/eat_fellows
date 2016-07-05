var selectedRest = '';
var restName = document.getElementById('loc_name');
var address = document.getElementById('loc_address');
var phone = document.getElementById('loc_phone');
var type = document.getElementById('loc_type');
var cost = document.getElementById('loc_cost');
var rating = document.getElementById('loc_rating');
var gfc = document.getElementById('loc_gfc');
var details = document.getElementById('details');
var restList = document.getElementById('rest_list');

function checkLocalStorage() {
  if(localStorage.storedSelection) {
    selectedRest = JSON.parse(localStorage.storedSelection);
    console.log('restaurant found');
  }
};

function loadInfo() {
  // to load restaurant information into the DOM.
  if (selectedRest) {
    restName.textContent = selectedRest.name;
    address.textContent = selectedRest.address;
    phone.textContent = selectedRest.phone;
    type.textContent = selectedRest.type;
    rating.textContent = selectedRest.reviews[0].rating;
    cost.textContent = selectedRest.reviews[0].cost;
    gfc.textContent = selectedRest.reviews[0].code;
  }
};

checkLocalStorage();
loadInfo();