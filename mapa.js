let map = L.map('map').setView([17.060555555556, -96.725277777778], 8)

//Agregar tilelAyer mapa base desde openstreetmap
let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap',
  maxZoom: 19
});

let satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri',
  maxZoom: 19
});

let topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenTopoMap',
  maxZoom: 17
});

let darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; CartoDB',
  maxZoom: 19
});

// Crear marcadores individuales
let tlacolula = L.marker([16.957644318128274, -96.48049111696808]).bindPopup(`
  <strong>Tlacolula de Matamoros</strong><br>
  <strong>Responsable:</strong> Adrián Alejandro Jiménez López<br>
  <strong>Direccion:</strong> Hidalgo No. 16<br>
  <strong>Telefono:</strong>  951 144 32 49
`);

let ocotlan = L.marker([16.792222, -96.675]).bindPopup("Ocotlan de Morelos");
let zimatlan = L.marker([16.77, -96.95]).bindPopup("Zimatlan de Alvarez");
let miahuatlan = L.marker([16.3327, -96.59558]).bindPopup("Miahuatlan");
let tehuantepec = L.marker([16.31841,-95.24783]).bindPopup("Tehuantepec");
let matias = L.marker([16.8754,-95.04106]).bindPopup("Matias Romero");
let teotitlan = L.marker([18.1306,-97.06839]).bindPopup("Teotitlan de Flores Magon");
let nochixtlan = L.marker([17.4588,-97.22163]).bindPopup("Nochixtlan");
let tlaxiaco = L.marker([17.2700, -97.67790]).bindPopup("Tlaxiaco");
let huajuapan = L.marker([17.8042, -97.78069]).bindPopup("Huajuapan de León");
let pinotepa = L.marker([16.3381, -98.04850]).bindPopup("Pinotepa Nacional");
let puerto = L.marker([15.8658, -97.06923]).bindPopup("Puerto Escondido");
let ixtlan = L.marker([17.3341, -96.4867]).bindPopup("Ixtlan de Juarez");
let tuxtepec = L.marker([18.0936, -96.13147]).bindPopup("Tuxtepec");
let ayutla = L.marker([17.0279, -96.07599]).bindPopup("Ayutla Mixe");
let etla = L.marker([17.2054, -96.80044]).bindPopup("Etla");
let juchitan = L.marker([16.4384, -95.01963]).bindPopup("Juchitan de Zaragoza");
let juxtlahuaca = L.marker([17.3336, -98.00988]).bindPopup("Juxtlahuaca");
let oaxaca = L.marker([17.0692, -96.71734]).bindPopup("Oaxaca de Juárez");
let mariaLombardo = L.marker([17.4492, -95.42823]).bindPopup("Maria Lombardo");
let huautla = L.marker([18.1296, -96.83831]).bindPopup("Huautla de Jiménez");
let jamiltepec = L.marker([16.2793, -97.81914]).bindPopup("Jamiltepec");
let xoxocotlan = L.marker([17.0259, -96.73453]).bindPopup("Xoxocotlan");
let pochutla = L.marker([15.7406, -96.46812]).bindPopup("Pochutla");
let zanatepec = L.marker([16.4833, -94.35568]).bindPopup("Zanatepec");
let ojitlan = L.marker([18.0591, -96.39639]).bindPopup("Ojitlan");

//Municipios prioritarios
let acatlan = L.marker([18.45, -96.53]).bindPopup("Acatlán de Pérez Figueroa");
let ixtaltepec = L.marker([16.65, -94.983333]).bindPopup("Asunción Ixtaltepec");
let candelaria = L.marker([15.9, -96.52]).bindPopup("Candelaria Loxicha");
let ciudadIxtepec = L.marker([16.5281, -95.1047]).bindPopup("Ciudad Ixtepec");
let coatlacasAltas = L.marker([16.7833, -96.8833]).bindPopup("Coatecas Altas");
let coicoyan = L.marker([17.1833, -98.1833]).bindPopup("Coicoyán de las Flores");
let constanciaRosario = L.marker([17.0167, -97.9333]).bindPopup("Constancia del Rosario");
let cosolapa = L.marker([18.5833, -96.6333]).bindPopup("Cosolapa");
let eloxochitlan = L.marker([18.1167, -96.8833]).bindPopup("Eloxochitlán de Flores Magón");
let ejutla = L.marker([16.5667, -96.7167]).bindPopup("Heroica Ciudad de Ejutla de Crespo");
let tezoatlan = L.marker([17.5833, -97.7833]).bindPopup("Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca");
let huautepec = L.marker([18.1333, -96.8333]).bindPopup("Huautepec");
let lomaBonita = L.marker([18.1333, -95.8667]).bindPopup("Loma Bonita");
let mazatlan = L.marker([18.1167, -96.9667]).bindPopup("Mazatlán Villa de Flores");
let putla = L.marker([17.0333, -97.9333]).bindPopup("Putla Villa de Guerrero");
let salinaCruz = L.marker([16.1667, -95.2000]).bindPopup("Salina Cruz");
let sanAgustinLoxicha = L.marker([15.9833, -96.8167]).bindPopup("San Agustín Loxicha");
let sanBartolomeAyautla = L.marker([18.1167, -96.7167]).bindPopup("San Bartolomé Ayautla");
let sanBlasAtempa = L.marker([16.3833, -95.2000]).bindPopup("San Blas Atempa");
let sanCarlosYautepec = L.marker([16.3667, -95.9333]).bindPopup("San Carlos Yautepec");
let sanDionisioOcotepec = L.marker([16.7833, -96.3667]).bindPopup("San Dionisio Ocotepec");
let sanFelipeJalapa = L.marker([17.9833, -96.5667]).bindPopup("San Felipe Jalapa de Díaz");
let sanFelipeUsila = L.marker([17.9833, -96.5333]).bindPopup("San Felipe Usila");
let sanJoseChiltepec = L.marker([18.0833, -96.5333]).bindPopup("San José Chiltepec");
let sanJoseTenango = L.marker([18.1667, -96.6667]).bindPopup("San José Tenango");
let valleNacional = L.marker([17.7833, -96.3167]).bindPopup("San Juan Bautista Valle Nacional");
let sanJuanColorado = L.marker([16.5833, -97.9833]).bindPopup("San Juan Colorado");
let sanJuanCozocon = L.marker([17.8333, -96.9333]).bindPopup("San Juan Cozocón");
let sanJuanGuichicovi = L.marker([16.9833, -95.2833]).bindPopup("San Juan Guichicovi");
let sanJuanLalana = L.marker([17.3667, -95.8833]).bindPopup("San Juan Lalana");
let sanJuanMazatlan = L.marker([17.3667, -95.6167]).bindPopup("San Juan Mazatlán");
let sanJuanMixtepec = L.marker([17.0167, -97.9333]).bindPopup("San Juan Mixtepec");
let sanLorenzo = L.marker([17.0167, -96.6167]).bindPopup("San Lorenzo");
let sanLorenzoTexmelucan = L.marker([17.0167, -96.6167]).bindPopup("San Lorenzo Texmelucan");
let sanLucasOjitlan = L.marker([18.0667, -96.5333]).bindPopup("San Lucas Ojitlán");
let sanLucasZoquiapam = L.marker([18.1167, -96.8167]).bindPopup("San Lucas Zoquiápam");
let sanMartinPeras = L.marker([17.0167, -98.1167]).bindPopup("San Martín Peras");
let sanMateoMar = L.marker([16.21007, -94.98187]).bindPopup("San Mateo del Mar");
let sanMiguelPuerto = L.marker([15.9833, -96.5667]).bindPopup("San Miguel del Puerto");
let sanMiguelPanixlahuaca = L.marker([16.0167, -96.5667]).bindPopup("San Miguel Panixlahuaca");
let sanMiguelQuetzaltepec = L.marker([16.9833, -95.9667]).bindPopup("San Miguel Quetzaltepec");
let sanMiguelSoyaltepec = L.marker([18.1833, -96.5333]).bindPopup("San Miguel Soyaltepec");
let sanPedroIxcatlan = L.marker([18.1667, -96.5333]).bindPopup("San Pedro Ixcatlán");
let sanPedroJicayan = L.marker([16.5833, -98.0167]).bindPopup("San Pedro Jicayán");
let sanPedroMixtepec = L.marker([15.9333, -97.1667]).bindPopup("San Pedro Mixtepec");
let sanPedroPochutla = L.marker([15.7406, -96.4681]).bindPopup("San Pedro Pochutla");
let sanPedroQuiatoni = L.marker([16.7667, -96.3667]).bindPopup("San Pedro Quiatoni");
let sanPedroTapanatepec = L.marker([16.3667, -94.2333]).bindPopup("San Pedro Tapanatepec");
let sanPedroSanPabloAyutla = L.marker([17.0167, -96.0667]).bindPopup("San Pedro y San Pablo Ayutla");
let sanSebastianTecomaxtlahuaca = L.marker([17.1667, -98.0167]).bindPopup("San Sebastián Tecomaxtlahuaca");
let sanSimonZahuatlan = L.marker([17.1833, -97.9333]).bindPopup("San Simón Zahuatlán");
let santaCatarinaJuquila = L.marker([16.2333, -97.2833]).bindPopup("Santa Catarina Juquila");
let santaCruzXoxocotlan = L.marker([17.0259, -96.7345]).bindPopup("Santa Cruz Xoxocotlán");
let santaCruzZenzontepec = L.marker([16.5833, -97.5667]).bindPopup("Santa Cruz Zenzontepec");
let santaLuciaCamino = L.marker([17.0667, -96.7167]).bindPopup("Santa Lucía del Camino");
let santaLuciaMonteverde = L.marker([17.0167, -97.9333]).bindPopup("Santa Lucía Monteverde");
let santaMariaAtzompa = L.marker([17.0833, -96.7833]).bindPopup("Santa María Atzompa");
let santaMariaChilchotla = L.marker([18.1167, -96.8167]).bindPopup("Santa María Chilchotla");
let santaMariaChimalapa = L.marker([16.7833, -94.6667]).bindPopup("Santa María Chimalapa");
let santaMariaColotepec = L.marker([15.9333, -97.1667]).bindPopup("Santa María Colotepec");
let santaMariaHuatulco = L.marker([15.8500, -96.3333]).bindPopup("Santa María Huatulco");
let santaMariaHuazolotitlan = L.marker([16.0167, -97.9333]).bindPopup("Santa María Huazolotitlán");
let santaMariaJacatepec = L.marker([18.0167, -96.5333]).bindPopup("Santa María Jacatepec");
let santaMariaAsuncion = L.marker([17.0167, -96.6167]).bindPopup("Santa María la Asunción");
let santaMariaPetapa = L.marker([16.9833, -95.2833]).bindPopup("Santa María Petapa");
let santaMariaTlahuitoltepec = L.marker([17.0167, -96.0667]).bindPopup("Santa María Tlahuitoltepec");
let santaMariaTonaneca = L.marker([15.9667, -96.0667]).bindPopup("Santa María Tonameca");
let santaMariaXadani = L.marker([16.3333, -95.9667]).bindPopup("Santa María Xadani");
let santaMariaZacatepec = L.marker([16.3333, -97.5667]).bindPopup("Santa María Zacatepec");
let santiagoAmoltepec = L.marker([16.5833, -97.5667]).bindPopup("Santiago Amoltepec");
let santiagoIxtayutla = L.marker([16.5833, -97.5667]).bindPopup("Santiago Ixtayutla");
let santiagoJamiltepec = L.marker([16.2833, -97.8167]).bindPopup("Santiago Jamiltepec");
let santiagoJocotepec = L.marker([17.9833, -96.5333]).bindPopup("Santiago Jocotepec");
let santiagoJuxtlahuaca = L.marker([17.3336, -98.0099]).bindPopup("Santiago Juxtlahuaca");
let santiagoMatatlan = L.marker([16.8333, -96.3667]).bindPopup("Santiago Matatlán");
let santiagoPinotepaNacional = L.marker([16.3381, -98.0485]).bindPopup("Santiago Pinotepa Nacional");
let santiagoYaitepec = L.marker([16.1833, -97.3667]).bindPopup("Santiago Yaitepec");
let santiagoZacatepec = L.marker([16.1833, -97.3667]).bindPopup("Santiago Zacatepec");
let santoDomingoMorelos = L.marker([15.8667, -96.3667]).bindPopup("Santo Domingo de Morelos");
let santoDomingoPetapa = L.marker([16.9833, -95.2833]).bindPopup("Santo Domingo Petapa");
let santoDomingoTehuantepec = L.marker([16.3184, -95.2478]).bindPopup("Santo Domingo Tehuantepec");
let santoDomingoTepuxtepec = L.marker([17.0167, -96.6167]).bindPopup("Santo Domingo Tepuxtepec");
let santoDomingoZanatepec = L.marker([16.4833, -94.3557]).bindPopup("Santo Domingo Zanatepec");
let santosReyesNopala = L.marker([16.0167, -97.1667]).bindPopup("Santos Reyes Nopala");
let tamazulapam = L.marker([17.9833, -96.5667]).bindPopup("Tamazulápam del Espíritu Santo");
let tlaco = L.marker([16.9576, -96.4805]).bindPopup("Tlacolula de Matamoros");
let unionHidalgo = L.marker([16.4833, -94.9333]).bindPopup("Unión Hidalgo");
let villaTututepec = L.marker([16.0167, -97.5667]).bindPopup("Villa de Tututepec");
let villaZaachila = L.marker([16.9500, -96.7667]).bindPopup("Villa de Zaachila");
let villaSolaVega = L.marker([16.4833, -97.0167]).bindPopup("Villa Sola de Vega");


// Crear un layer group con los marcadores
// Crear los layer groups usando las variables (sin duplicados)
var coordinaciones = L.layerGroup([
  tlacolula, ocotlan, zimatlan, miahuatlan, tehuantepec, matias, teotitlan, nochixtlan, tlaxiaco, huajuapan, pinotepa, puerto, ixtlan, tuxtepec, ayutla, etla, juchitan, juxtlahuaca, oaxaca, mariaLombardo, huautla, jamiltepec, xoxocotlan, pochutla, zanatepec, ojitlan
]);

var municipiosPrioritarios = L.layerGroup([
  acatlan, ixtaltepec, candelaria, ciudadIxtepec, coatlacasAltas, coicoyan, constanciaRosario, cosolapa, eloxochitlan, ejutla, huajuapan, tlaxiaco, tezoatlan, huautepec, huautla, juchitan, lomaBonita, matias, mazatlan, miahuatlan, oaxaca, ocotlan, putla, salinaCruz, sanAgustinLoxicha, sanBartolomeAyautla, sanBlasAtempa, sanCarlosYautepec, sanDionisioOcotepec, sanFelipeJalapa, sanFelipeUsila, sanJoseChiltepec, sanJoseTenango, tuxtepec, valleNacional, sanJuanColorado, sanJuanCozocon, sanJuanGuichicovi, sanJuanLalana, sanJuanMazatlan, sanJuanMixtepec, sanLorenzo, sanLorenzoTexmelucan, sanLucasOjitlan, sanLucasZoquiapam, sanMartinPeras, sanMateoMar, sanMiguelPuerto, sanMiguelPanixlahuaca, sanMiguelQuetzaltepec, sanMiguelSoyaltepec, sanPedroIxcatlan, sanPedroJicayan, sanPedroMixtepec, sanPedroPochutla, sanPedroQuiatoni, sanPedroTapanatepec, sanPedroSanPabloAyutla, sanSebastianTecomaxtlahuaca, sanSimonZahuatlan, santaCatarinaJuquila, santaCruzXoxocotlan, santaCruzZenzontepec, santaLuciaCamino, santaLuciaMonteverde, santaMariaAtzompa, santaMariaChilchotla, santaMariaChimalapa, santaMariaColotepec, santaMariaHuatulco, santaMariaHuazolotitlan, santaMariaJacatepec, santaMariaAsuncion, santaMariaPetapa, santaMariaTlahuitoltepec, santaMariaTonaneca, santaMariaXadani, santaMariaZacatepec, santiagoAmoltepec, santiagoIxtayutla, santiagoJamiltepec, santiagoJocotepec, santiagoJuxtlahuaca, santiagoMatatlan, santiagoPinotepaNacional, santiagoYaitepec, santiagoZacatepec, santoDomingoMorelos, santoDomingoPetapa, santoDomingoTehuantepec, santoDomingoTepuxtepec, santoDomingoZanatepec, santosReyesNopala, tamazulapam, tlaco, unionHidalgo, villaTututepec, villaZaachila, villaSolaVega, zimatlan
]);


// Agregar el layer group al mapa
coordinaciones.addTo(map);


// === AGREGAR CONTROL DE CAPAS ===
let baseMaps = {
  "Mapa Normal": osmLayer,
  "Satélite": satelliteLayer,
  "Topográfico": topoLayer,
  "Oscuro": darkLayer
};

// === CAPAS SUPERPUESTAS (checkbox) ===
let overlayMaps = {
  "Coordinaciones IEEA": coordinaciones,
  "Municipios Prioritarios": municipiosPrioritarios
};

L.control.layers(baseMaps, overlayMaps).addTo(map);


// Agregar la capa inicial
osmLayer.addTo(map);