const mapContainer = document.querySelector('.map-container');

mapboxgl.accessToken = 'ACCESSTOKEN';

const map = new mapboxgl.Map({
    container: mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [0, 2.842170943040401e-14],
    zoom: 1,
});
