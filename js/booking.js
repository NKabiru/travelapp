// Variables
var radioAddCostOption = document.getElementById('add-costs-option');
var radioNoCostOption = document.getElementById('no-costs-option');
var textareaCosts = document.getElementById('added-costs');

// Event listeners for the AdditionalCosts textarea
radioAddCostOption.addEventListener('click', function () {
  textareaCosts.disabled = false;
});

radioNoCostOption.addEventListener('click', function () {
  textareaCosts.disabled = true;
});
