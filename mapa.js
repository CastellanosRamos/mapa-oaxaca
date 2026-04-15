let map = L.map('map').setView([17.060555555556, -96.725277777778],7)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})

//En esta sección se xploran los layer groups, que son grupos de capas que se pueden manejar como una sola capa. Esto es útil para organizar y controlar la visibilidad de múltiples capas en un mapa. En este ejemplo, se crean varios marcadores individuales y luego se agrupan en un layer group llamado "cities". Finalmente, el layer group se agrega al mapa para mostrar todos los marcadores juntos.
// Crear marcadores individuales
let tlacolula = L.marker([16.957644318128274, -96.48049111696808]).bindPopup(`
  <strong>Tlacolula de Matamoros</strong><br>
  <strong>Responsable:</strong> Adrian Alejandro Jimenez Lopez<br>
  <strong>Direccion:</strong> Hidalgo No. 16<br>
  <strong>Telefono:</strong>  951-14-4-32-49
`);



let ocotlan = L.marker([16.792222, -96.675]).bindPopup("Ocotlan de Morelos");
let zimatlan = L.marker([16.77, -96.95]).bindPopup("Aurora");
let miahuatlan = L.marker([16.3327, -96.59558]).bindPopup("Miahuatlan");

// 2. Crear un layer group con los marcadores
var cities = L.layerGroup([tlacolula, ocotlan, zimatlan, miahuatlan]);

// 3. Agregar el layer group al mapa
cities.addTo(map);