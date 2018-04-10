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

MapMaker.prototype.addInfoWindowToMarker = function () {
  let infowindow = new google.maps.InfoWindow({
    content: "This is the Wells Fargo Center.
              Home of the Philadelphia Flyers.
              The greatest hockey team to ever play the ice sport.
              We like this trash team, they have epic gingers.
              And Michael Raffl. We like Michael Raffl."
  });
 for(marker of this.markers){
   marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
}
};
