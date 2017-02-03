$(document).ready(function(){
  // Enable parallax scroll for images
  $('.parallax').parallax();

  // Side Navigation bar for smaller devices
  $(".button-collapse").sideNav({
    menuWidth: 300,
    closeOnClick: true,
    draggable: true
  });

  // Carousel animation
  $('.carousel.carousel-slider').carousel({
    duration: 300,
    indicators: true,
    fullWidth: true
  });

  //Enabling the select element
  $('select').material_select();

  // Enabling date picker
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
  });
});
