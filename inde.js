function succes(post){
    console.log(post.coords.latitude, post.coords.longitude);
    
    var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.5609843, -51.4388333]).addTo(map)
    .bindPopup(' voce esta aqui')
    .openPopup();
}

navigator.geolocation.getCurrentPosition(succes);




    


    