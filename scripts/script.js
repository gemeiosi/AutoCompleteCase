//Autocomplete
$( function() {

  var classes = [
  "Athens",
  "Nea Smirni",
  "Palaio Faliro",
  "Psichiko"
  ];

  $( "#search" ).autocomplete({
    source: classes,
    minLength:2,
  });
} );