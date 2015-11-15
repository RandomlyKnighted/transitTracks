HSV_TT.map = {};

HSV_TT.map.init = function() {	  
  var map = L.map('transitMap').setView([34.731, -86.586], 15);
  var stopIcon = L.Icon.Default.extend({
	options: {
	  iconUrl: 'public/images/stopIcon.png',
      iconSize: [33, 38],
	  iconAnchor: [16, 19],
	  popupAnchor: new Point(-1, -40)
	  
	}
  });

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'hsvtransit.cigx5tx9c0u474mm3jqvacywa',
    accessToken: 'pk.eyJ1IjoiaHN2dHJhbnNpdCIsImEiOiJjaWd4NXR5bDcwdWdiNjVtMHJqajByZ2FwIn0.MGnCx-SYksm4Ia8-4CoWMg'
  }).addTo(map);
  
  L.geoJson(dt_route).addTo(map);

  stops = L.geoJson(dt_stops, { 
    pointToLayer: function( feature, latlng ) {
		console.log("feature: " + feature);
		console.log("icon ref: " + stopIcon.icon.iconUrl);
      return L.marker(latlng, {icon: stopIcon});
	},
   	onEachFeature: function (feature, layer) {
		console.log("time: " + feature.properties.time);
		console.log("icon ref: " + stopIcon.popupAnchor);
		//layer.bindPopup(feature.properties.time);
	}  
   });
   stops.addTo(map);
}