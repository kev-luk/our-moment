const mapContainer = document.querySelector('.map-container');

mapboxgl.accessToken =
    'pk.eyJ1Ijoia2V2LWx1ayIsImEiOiJja2UyenJheDMwMHlzMnhxdmdld2ppb3N3In0.6wCU8fmJdcZIpVMAhXXneA';

const map = new mapboxgl.Map({
    container: mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [0, 2.842170943040401e-14],
    zoom: 1,
});
