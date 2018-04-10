const MapMaker = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapMaker.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker);
};

// MapMaker.prototype.addClickEvent = function () {
//   google.maps.event.addListener(this.googleMap, 'click', function(event){
//     const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
//     this.addMarker(coords);
//     }.bind(this));
//   };

// MapMaker.prototype.bounceMarkers = function () {
//   this.markers.forEach(function(marker){
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   })
};
