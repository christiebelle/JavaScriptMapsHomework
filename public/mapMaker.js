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
    content: "This is the Wells Fargo Center. Home of the Philadelphia Flyers. The greatest hockey team to ever play the ice sport. We like this trash team, they have epic gingers. And Michael Raffl. We like Michael Raffl."
  });
 for(marker of this.markers){
   marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
};
}

MapMaker.prototype.addInfoWindowToMarker2 = function () {
  let infowindow = new google.maps.InfoWindow({
    content: "This is the PPG Paints Arena. Home of the Pittsburgh Penguins. The worstest hockey team to ever play the ice sport. We hate this terrible team, they do not have epic gingers. They have Sidney Crosby. Sidney Crosby's favorite Star Wars character is Jar-Jar Binks."
  });
 for(marker of this.markers){
   marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
};
}

MapMaker.prototype.changeLocation = function () {
  const container = document.querySelector('#mapDiv');
  const center = {lat: 40.440083, lng: -79.989424};
  const zoom = 14;
  const map = new MapMaker(container, center, zoom);
  map.addMarker(center);
  map.addInfoWindowToMarker2();
};
