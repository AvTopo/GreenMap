mapboxgl.accessToken = 'PUT IN YOUR TOKEN';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'PUT IN YOUR DESIRED STYLE',
	
  // Nordend Center Coordinates TBA
  center: [8.6889, 50.1295],
  zoom: 13.7
});


// add markers to map
function addMarkers() {
    
    places.forEach(function (marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat([marker.lon, marker.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h1>Mein Grüner Ort:</h1>' +
          '<div class="popupImage"><h2>' + 
          marker.owner + '</h2><img src="' +
          marker.imageUrl +'" alt="' +
          marker.owner +'">' +
          '</div><hr class="rounded"><h3>' + 
          marker.name + 
          '</h3><p>' + 
          marker.description + 
          '</p><p>' + 
          marker.url + 
          '</p>'
          ))
        .addTo(map);
    });
}
