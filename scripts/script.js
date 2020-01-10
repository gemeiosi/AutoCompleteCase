//Autocomplete
$( function() {

  var entries = [];
$.getJSON("entries.json", function(data) {
    $.each(data, function(key, value) {
        if ($.inArray(value.name, entries) === -1) {
            entries.push(value.name)
        }
    })
});

  /* $( ".open" ).click(function initMap() {
    $(".popup, .popup-content").addClass("active");
    // The location of Greece
    var greece = {lat: 39.0742, lng: -21.8243};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: greece});
    // The marker, positioned at Greece
    var marker = new google.maps.Marker({position: greece, map: map});
  }); */

  $('#search').keyup(function() {

    var empty = false;
    $('#search').each(function() {
        if ($(this).val() == '') {
            empty = true;
        }
    });

    if (empty) {
        $('.open').attr('disabled', true);
    } else {
        $('.open').attr('disabled', false);
    }
});

 $(".open").on("click", function(){
    $(".popup, .popup-content").addClass("active");
    });
    
  $(".close, .popup").on("click", function(){
      $(".popup, .popup-content").removeClass("active");
      });

  //****Local Entries******//
  
  /* var classes = [
  "Athens",
  "Athens 1",
  "Athens 3",
  "Athens 4",
  "Nea Smirni",
  "Palaio Faliro",
  "Palaio Psichiko"
  ]; */

  $( "#search" ).autocomplete({
    source: function(req, response) {
      var results = $.ui.autocomplete.filter(entries, req.term);
      response(results.slice(0, 20));//for getting 20 results
     },
    minLength:2,
    autoFocus:true,
    delay:120,
    remoteDataType: 'json'
  });

  
} );