var map;
var markers = [];

function initialize() {
  var myLatlng = new google.maps.LatLng(48.47986303, 35.0231266);
  var myLatlng2 = new google.maps.LatLng(48.46108396, 35.0080204);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

   // This event listener will call addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
  addMarker(myLatlng);
  addMarker(myLatlng2);

}// initialize

// Add a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
  console.log(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=false&callback=initialize';
  document.body.appendChild(script);


}

function console_markers () {
  for (var i = 0; i < markers.length; i++) {
    console.log(i+' = '+markers[i].position.A+'*'+markers[i].position.F);
  };
}

window.onload = loadScript;