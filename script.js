mapboxgl.accessToken = 'pk.eyJ1IjoiY3dpbG1vdHQiLCJhIjoiY2s2bWRjb2tiMG1xMjNqcDZkbGNjcjVraiJ9.2nNOYL23A1cfZSE4hdC9ew';
const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/cwilmott/cmg5px11u00ef01sm3fr65ro0',
        center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
