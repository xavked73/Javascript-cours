navigator.geolocation.getCurrentPosition(function(infos){

    console.log(infos);
    let latitude = infos.coords.latitude;
    let longitude = infos.coords.longitude;
    let zoom = 8;

    // L est l'objet Leaflet (de la librairie qu'on a intégré sur le html)
    let maCarte = L.map(document.getElementById('map')).setView([latitude,longitude],zoom);

    // charger les tuiles de carte
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
        minZoom:1,
        maxZoom:20,
        attribution: '&copy; JS Power'
    }).addTo(maCarte);

    // on place un marqueur aux coordonnées
    L.marker([latitude,longitude]).addTo(maCarte);    

    /*

    https://nominatim.openstreetmap.org/search/{adresse}?format=json&addressdetails=1&limit=1

    https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json&addressdetails=1

    */

});
