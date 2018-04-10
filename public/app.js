const initialise = function(){

    const container = document.querySelector('#mapDiv');
    const center = {lat: 39.901284, lng: -75.171990};
    const zoom = 14;

    const map = new MapMaker(container, center, zoom);
    map.addMarker(center);
    map.addInfoWindowToMarker();

    const changeLocation = document.getElementById('change-location');
    changeLocation.addEventListener('click', map.changeLocation);
};

window.addEventListener('DOMContentLoaded', initialise);
