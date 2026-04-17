let map = L.map('map').setView([17.060555555556, -96.725277777778], 8)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e) {
  let coords = e.target.value.split(",");
  map.flyTo(coords, 13);
})

// Crear marcadores individuales
let tlacolula = L.marker([16.957644318128274, -96.48049111696808]).bindPopup(`
  <strong>Tlacolula de Matamoros</strong><br>
  <strong>Responsable:</strong> Adrian Alejandro Jimenez Lopez<br>
  <strong>Direccion:</strong> Hidalgo No. 16<br>
  <strong>Telefono:</strong>  951-14-4-32-49
`);

let ocotlan = L.marker([16.792222, -96.675]).bindPopup("Ocotlan de Morelos");
let zimatlan = L.marker([16.77, -96.95]).bindPopup("Zimatlan de Alvarez");
let miahuatlan = L.marker([16.3327, -96.59558]).bindPopup("Miahuatlan");
let tehuantepec = L.marker([16.31841,-95.24783]).bindPopup("Tehuantepec");
let matias = L.marker([16.8754,-95.04106]).bindPopup("Matias Romero");
let teotitlan = L.marker([18.1306,-97.06839]).bindPopup("Teotitlan de Flores Magon");
let nochixtlan = L.marker([18.1306,-97.06839]).bindPopup("Nochixtlan");
let tlaxiaco = L.marker([17.2700, -97.67790]).bindPopup("Tlaxiaco");
let huajuapan = L.marker([17.8042, -97.78069]).bindPopup("Huajuapan de León");
let pinotepa = L.marker([16.3381, -98.04850]).bindPopup("Pinotepa Nacional");
let puerto = L.marker([15.8658, -97.06923]).bindPopup("Puerto Escondido");
let ixtlan = L.marker([17.3341, -96.4867]).bindPopup("Ixtlan de Juarez");
let tuxtepec = L.marker([18.0936, -96.13147]).bindPopup("Tuxtepec");
let ayutla = L.marker([18.0936, -96.13147]).bindPopup("Ayutla Mixe");

// GeoJSON aproximado del municipio de Tlacolula de Matamoros
let tlacolulaGeoJson = {
  "type": "Feature",
  "properties": { "name": "Tlacolula de Matamoros" },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-96.5360, 16.9840],
      [-96.5310, 16.9540],
      [-96.5240, 16.9280],
      [-96.4970, 16.9070],
      [-96.4720, 16.9140],
      [-96.4500, 16.9340],
      [-96.4380, 16.9610],
      [-96.4500, 16.9890],
      [-96.4820, 16.9950],
      [-96.5150, 16.9910],
      [-96.5360, 16.9840]
    ]]
  }
};

let zonaTlacolula = L.geoJSON(tlacolulaGeoJson, {
  style: {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25,
    weight: 2
  }
}).bindPopup('Municipio de Tlacolula de Matamoros');

// Crear un layer group con los marcadores
var coordinaciones = L.layerGroup([tlacolula, ocotlan, zimatlan, miahuatlan, tehuantepec, matias, teotitlan, nochixtlan, tlaxiaco, huajuapan, pinotepa, puerto, ixtlan, tuxtepec, ayutla]);

// Agregar el layer group al mapa
coordinaciones.addTo(map);

// === AGREGAR CONTROL DE CAPAS ===
let overlayMaps = {
  "Coordinaciones": coordinaciones,
  "Municipio Tlacolula": zonaTlacolula
};

L.control.layers(null, overlayMaps).addTo(map);