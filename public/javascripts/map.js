var map = L.map('main_map').setView([-34.6012424, -58.3861497], 13); //capital federal

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap<a> contributors'
}).addTo(map);

// L.marker([-34.6012424, -58.3861497]).addTo(map) PARA agregar marcadores al mapa
