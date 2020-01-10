//Autocomplete
$( function() {

  var classes = [
  "Athens",
  "Athens 1",
  "Athens 3",
  "Athens 4",
  "Nea Smirni",
  "Palaio Faliro",
  "Palaio Psichiko"
  ];

  $( "#search" ).autocomplete({
    source: function(req, response) {
      var results = $.ui.autocomplete.filter(classes, req.term);
  
      response(results.slice(0, 20));//for getting 20 results
     },
    minLength:2,
    autoFocus:true,
    delay:120,
    remoteDataType: 'json'
  });
} );