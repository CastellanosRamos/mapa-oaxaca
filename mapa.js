let map = L.map('map').setView([16.90, -96.30], 8)

var layers_sierra_sur = []
var layers_istmo = []
var layers_sierra_juarez = []
var layers_valles_centrales = []
var layers_cuenca = []
var layers_mixteca = []
var layers_costa = []
var layers_cañada = []


//personalización de icono coordinación defecto
var miIcono = L.icon({
    iconUrl: 'images/marcador-mapa.png',   // imagen principal
    iconSize: [32, 32],               // tamaño del icono
    iconAnchor: [16, 32],             // punto donde "pincha" en el mapa
    popupAnchor: [0, -32]             // posición del popup
});

//personalización de icono 100 municipios prioritarios 2025
var iconoPrioritario = L.icon({
    iconUrl: 'images/prioritarios.png',   // imagen principal
    iconSize: [32, 32],               // tamaño del icono
    iconAnchor: [16, 32],             // punto donde "pincha" en el mapa
    popupAnchor: [0, -32]             // posición del popup
});

//personalización de icono 29 municipios mas prioritarios
var iconoMasPrioritario = L.icon({
    iconUrl: 'images/masprioritarios.png',   // imagen principal
    iconSize: [32, 32],               // tamaño del icono
    iconAnchor: [16, 32],             // punto donde "pincha" en el mapa
    popupAnchor: [0, -32]             // posición del popup
});

//Ṕersonalización de ícono para municipios visitados
var iconoVisitados = L.icon({
    iconUrl: 'images/visitados.png',   // imagen principal
    iconSize: [32, 32],               // tamaño del icono
    iconAnchor: [16, 32],             // punto donde "pincha" en el mapa
    popupAnchor: [0, -32]             // posición del popup
});



//establecer el icono personalizado como predeterminado para los marcadores
L.Marker.prototype.options.icon = miIcono;


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

//poligono.bringToFront();
//detalles de las regiones
istmo_municipios = ["20005","20010","20014","20025","20030","20036","20043","20052","20053","20057","20066","20075","20079","20124","20130","20141","20143","20198","20248","20265","20282","20305","20307","20308","20327","20407","20412","20418","20421","20427","20440","20441","20453","20470","20472","20505","20508","20513","20515","20525","20557"]
valles_municipios = ["20007","20013","20015","20017","20023","20028","20033","20045","20048","20049","20051","20063","20067","20068","20069","20072","20077","20078","20080","20083","20084","20087","20091","20092","20101","20102","20103","20104","20107","20108","20112","20115","20118","20123","20131","20132","20135","20145","20150","20157","20161","20162","20174","20175","20178","20179","20192","20193","20194","20197","20203","20219","20226","20227","20233","20238","20241","20243","20268","20271","20273","20284","20292","20293","20294","20295","20298","20301","20310","20315","20325","20328","20333","20338","20342","20343","20349","20350","20356","20358","20360","20368","20369","20375","20378","20380","20385","20387","20388","20389","20390","20393","20398","20399","20403","20409","20411","20426","20449","20452","20475","20483","20487","20494","20506","20519","20530","20531","20534","20539","20542","20546","20550","20551","20553","20555","20560","20561","20563","20565","20570"]
mixteca_municipios = ["20004","20006","20011","20016","20018","20022","20026","20032","20034","20039","20046","20047","20050","20054","20055","20065","20081","20086","20089","20093","20094","20096","20099","20105","20106","20110","20119","20121","20127","20129","20133","20140","20144","20147","20151","20152","20160","20164","20165","20172","20176","20181","20183","20186","20195","20199","20208","20210","20215","20217","20218","20221","20224","20230","20237","20239","20240","20242","20245","20250","20251","20252","20255","20256","20258","20259","20261","20264","20269","20270","20274","20281","20283","20286","20287","20290","20297","20304","20317","20320","20321","20329","20331","20332","20339","20340","20341","20346","20348","20352","20370","20371","20372","20373","20376","20379","20381","20382","20383","20395","20397","20400","20404","20405","20408","20422","20423","20430","20444","20445","20446","20451","20455","20456","20459","20461","20462","20463","20464","20469","20476","20479","20480","20481","20484","20486","20488","20492","20493","20499","20500","20501","20510","20511","20518","20520","20521","20523","20524","20528","20529","20532","20536","20537","20540","20547","20548","20549","20552","20556","20562","20564","20567","20568","20569"]
cuenca_municipios = ["20002","20009","20021","20044","20134","20136","20166","20169","20184","20189","20205","20212","20232","20278","20309","20417","20460","20468","20498","20559"]
cañada_municipios = ["20019","20024","20027","20029","20040","20041","20058","20098","20109","20116","20139","20142","20163","20171","20177","20182","20187","20206","20220","20228","20234","20244","20249","20276","20311","20313","20322","20326","20330","20354","20355","20374","20396","20406","20416","20425","20431","20434","20436","20438","20478","20490","20527","20545","20558"]
costa_municipios = ["20012","20056","20070","20071","20082","20085","20090","20111","20113","20117","20153","20168","20180","20185","20188","20202","20213","20225","20253","20266","20272","20285","20302","20306","20312","20314","20318","20324","20334","20345","20364","20366","20367","20401","20402","20413","20414","20433","20439","20466","20467","20474","20482","20485","20489","20497","20507","20509","20526","20543"]
sierra_juarez_municipios = ["20001","20003","20031","20035","20038","20042","20060","20062","20097","20100","20114","20120","20128","20138","20156","20173","20190","20191","20196","20201","20207","20214","20216","20222","20223","20231","20246","20247","20257","20260","20262","20267","20275","20280","20288","20296","20299","20303","20323","20335","20336","20337","20359","20363","20365","20394","20419","20432","20435","20437","20442","20443","20454","20457","20458","20465","20471","20473","20496","20502","20503","20504","20514","20517","20522","20541","20544","20554"]
sierra_sur_municipios = ["20008","20020","20037","20059","20061","20064","20073","20074","20076","20088","20095","20122","20125","20126","20137","20146","20148","20149","20154","20155","20158","20159","20167","20170","20200","20204","20209","20211","20229","20235","20236","20254","20263","20277","20279","20289","20291","20300","20316","20319","20344","20347","20351","20353","20357","20361","20362","20377","20384","20386","20391","20392","20410","20415","20420","20424","20428","20429","20447","20448","20450","20477","20491","20495","20512","20516","20533","20535","20538","20566"]

//Coordinaciones



let tlacolula = L.marker([16.957644318128274, -96.48049111696808]).bindPopup(`
  <strong>Tlacolula de Matamoros</strong><br>
  <strong>Responsable:</strong> Adrián Alejandro Jiménez López<br>
  <strong>Direccion:</strong> Hidalgo No. 16<br>
  <strong>Telefono:</strong>  951 144 32 49
`);


let tehuantepec = L.marker([16.31841,-95.24783]).bindPopup(`
  <strong>Santo Domingo Tehuantepec</strong><br>
  <strong>Responsable:</strong> Consuelo Santos Martínez<br>
  <strong>Direccion:</strong> Guerrero No. 23 Altos<br>
  <strong>Telefono:</strong>  971 715 09 71
`);

let teotitlan = L.marker([18.1306,-97.06839]).bindPopup(`
  <strong>Teotitlán de Flores Magón</strong><br>
  <strong>Responsable:</strong>Iván Fortino Garzón Rayón<br>
  <strong>Direccion:</strong> Av. 5 de Mayo No 45A <br>
  <strong>Telefono:</strong>  236 372 00 81
`);

let nochixtlan = L.marker([17.4588,-97.22163]).bindPopup(`
  <strong>Nochixtlan</strong><br>
  <strong>Responsable:</strong>Iván Fortino Garzón Rayón<br>
  <strong>Direccion:</strong> Porfirio Díaz No 12 3er Piso <br>
  <strong>Telefono:</strong>  951 522 04 15
`);


let cordTlaxiaco = L.marker([17.2700, -97.67790]).bindPopup("Tlaxiaco");
let cordHuajuapan = L.marker([17.8042, -97.78069]).bindPopup("Huajuapan de León");
let cordMiahuatlan = L.marker([16.3327, -96.59558]).bindPopup("Miahuatlán de Porfirio Díaz");
let cordZimatlan = L.marker([16.77, -96.95]).bindPopup("Zimatlán de Álvarez");
let cordOcotlan = L.marker([16.792222, -96.675]).bindPopup("Ocotlán de Morelos");
let cordMatiasRomero = L.marker([16.8754,-95.04106]).bindPopup("Matías Romero");
let pinotepa = L.marker([16.3381, -98.04850]).bindPopup("Pinotepa Nacional");
let puerto = L.marker([15.8658, -97.06923]).bindPopup("Puerto Escondido");
let ixtlan = L.marker([17.3341, -96.4867]).bindPopup("Ixtlan de Juarez");
let cordTuxtepec = L.marker([18.0936, -96.13147]).bindPopup("Tuxtepec");
let ayutla = L.marker([17.0279, -96.07599]).bindPopup("Ayutla Mixe");
let etla = L.marker([17.2054, -96.80044]).bindPopup("Etla");
let cordJuchitan = L.marker([16.4384, -95.01963]).bindPopup("Juchitan de Zaragoza");
let juxtlahuaca = L.marker([17.3336, -98.00988]).bindPopup("Juxtlahuaca");
let cordOaxaca = L.marker([17.060556, -96.725278]).bindPopup("Oaxaca de Juárez");
let mariaLombardo = L.marker([17.4492, -95.42823]).bindPopup("Maria Lombardo");
let cordHuautla = L.marker([18.1296, -96.83831]).bindPopup("Huautla de Jiménez");
let jamiltepec = L.marker([16.2793, -97.81914]).bindPopup("Jamiltepec");
let xoxocotlan = L.marker([17.0259, -96.73453]).bindPopup("Xoxocotlan");
let pochutla = L.marker([15.7406, -96.46812]).bindPopup("Pochutla");
let zanatepec = L.marker([16.4833, -94.35568]).bindPopup("Zanatepec");
let ojitlan = L.marker([18.0591, -96.39639]).bindPopup("Ojitlan");

// 100 Municipios prioritarios
let tlaxiaco = L.marker([17.2700, -97.67790]).bindPopup("Tlaxiaco");
let huajuapan = L.marker([17.8042, -97.78069]).bindPopup("Huajuapan de León");
let miahuatlan = L.marker([16.3327, -96.59558]).bindPopup("Miahuatlán de Porfirio Díaz");
let zimatlan = L.marker([16.77, -96.95]).bindPopup("Zimatlán de Álvarez");
let ocotlan = L.marker([16.792222, -96.675]).bindPopup("Ocotlán de Morelos");
let oaxaca = L.marker([17.060556, -96.725278]).bindPopup("Oaxaca de Juárez");
let huautla = L.marker([18.1296, -96.83831]).bindPopup("Huautla de Jiménez");
let tuxtepec = L.marker([18.0936, -96.13147]).bindPopup("Tuxtepec");
let juchitan = L.marker([16.4384, -95.01963]).bindPopup("Juchitan de Zaragoza");
let matias = L.marker([16.8754,-95.04106]).bindPopup("Matías Romero");
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
let lomaBonita = L.marker([17.97, -95.87]).bindPopup("Loma Bonita");
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
let sanMartinPeras = L.marker([17.35, -98.233333]).bindPopup("San Martín Peras");
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
let santaMariaHuazolotitlan = L.marker([16.2, -97.93945]).bindPopup("Santa María Huazolotitlán");
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

  //29 Más prioritarios 
 let yaitepec = L.marker([16.1833, -97.3667]).bindPopup("Santiago Yaitepec");
 let coicoyanFlores = L.marker([17.1833, -98.1833]).bindPopup("Coicoyán de las Flores");
 let sanMiguelSantaFlor = L.marker([17.9234 , -96.8029]).bindPopup("San Miguel Santa Flor");
 let peras = L.marker([17.35, -98.233333]).bindPopup("San Martín Peras");
 let zahuatlan = L.marker([17.1833, -97.9333]).bindPopup("San Simón Zahuatlán");
 let huaute = L.marker([18.1333, -96.8333]).bindPopup("Huautepec");
 let ocopetatillo = L.marker([	18.1848, -96.9108]).bindPopup("San Pedro Ocopetatillo");
 let pedropabloayutla = L.marker([17.0167, -96.0667]).bindPopup("San Pedro y San Pablo Ayutla");
 let yosonotu = L.marker([17.0033 , -97.673]).bindPopup("Santa Catarina Yosonotu");
 let tilquiapan = L.marker([16.783333 , -96.583333]).bindPopup("San Miguel Tilquiapan");
 let ahuehuetitlan = L.marker([17.666667, -98.316667]).bindPopup("San Miguel Ahuehuetitlán");
 let huehuetlan = L.marker([18.2, -96.9375]).bindPopup("San Francisco Huehuetlán");
 let stamiahuatlan = L.marker([16.183333, -96.633333]).bindPopup("Santa Lucia Miahuatlán");
 let apoala = L.marker([17.633333, -97.141667]).bindPopup("Santiago Apoala");
 let bartolomeAyautla = L.marker([18.1167, -96.7167]).bindPopup("San Bartolomé Ayautla");
 let juandiuxi = L.marker([17.275, -97.391667]).bindPopup("San Juan Diuxi");
 let reyestepejillo = L.marker([17.41 , -97.95]).bindPopup("Santos reyes tepejillo");
 let sanMixtepec = L.marker([17.0167, -97.9333]).bindPopup("San Juan Mixtepec");
 let ateixtlahuaca = L.marker([18.2222 , -96.8877]).bindPopup("Santa Ana Ateixtlahuca");
 let elox = L.marker([18.1167, -96.8833]).bindPopup("Eloxochitlán de Flores Magón");
 let santiagoIxta = L.marker([16.5833, -97.5667]).bindPopup("Santiago Ixtayutla");
 let Sntenango = L.marker([18.1667, -96.6667]).bindPopup("San José Tenango");

  //Visitados
 let visitadoPochutla = L.marker([15.74757, -96.46664]).bindPopup("San Pedro Pochutla");
 let visitadoJuchitan = L.marker([16.433333, -95.019444]).bindPopup("Juchitán de zaragoza");
 let visitadoOaxaca = L.marker([17.060556, -96.725278]).bindPopup("Oaxaca de Juárez");

 let visitadoPuerto = L.marker([15.8658, -97.06923]).bindPopup("Puerto escondido");
 let visitadoEtla = L.marker([17.20758, -96.8008]).bindPopup("Etla");
 let visitadoOcotlan = L.marker([16.791389,-96.691667]).bindPopup("Ocotlán");
 let visitadoMiahuatlan = L.marker([16.3327,-96.59558]).bindPopup("Miahuatlán");
 let visitadoZimatlan = L.marker([16.86701, -96.7873]).bindPopup("Zimatlán");
 let visitadoXoxocotlan = L.marker([17.0259, -96.73453]).bindPopup("Xoxocotlán");
 let visitadoIxtlan = L.marker([17.4588,-97.22163]).bindPopup("Ixtlán");



 

// Crear un layer group con los marcadores
// Crear los layer groups usando las variables (sin duplicados)
var coordinaciones = L.layerGroup([
  tlacolula, cordOcotlan, cordZimatlan, cordMiahuatlan, tehuantepec, cordMatiasRomero, teotitlan, nochixtlan, cordTlaxiaco, cordHuajuapan, pinotepa, puerto, ixtlan, cordTuxtepec, ayutla, etla, cordJuchitan, juxtlahuaca, cordOaxaca, mariaLombardo, cordHuautla, jamiltepec, xoxocotlan, pochutla, zanatepec, ojitlan
]);

var municipiosPrioritarios = L.layerGroup([
  huautla,tuxtepec,acatlan, ixtaltepec,oaxaca,ocotlan, candelaria,miahuatlan,zimatlan,huajuapan, ciudadIxtepec,matias, coatlacasAltas,juchitan, coicoyan, constanciaRosario, cosolapa, eloxochitlan, ejutla, tlaxiaco, tezoatlan, huautepec, lomaBonita, mazatlan, putla, salinaCruz, sanAgustinLoxicha, sanBartolomeAyautla, sanBlasAtempa, sanCarlosYautepec, sanDionisioOcotepec, sanFelipeJalapa, sanFelipeUsila, sanJoseChiltepec, sanJoseTenango, valleNacional, sanJuanColorado, sanJuanCozocon, sanJuanGuichicovi, sanJuanLalana, sanJuanMazatlan, sanJuanMixtepec, sanLorenzo, sanLorenzoTexmelucan, sanLucasOjitlan, sanLucasZoquiapam, sanMartinPeras, sanMateoMar, sanMiguelPuerto, sanMiguelPanixlahuaca, sanMiguelQuetzaltepec, sanMiguelSoyaltepec, sanPedroIxcatlan, sanPedroJicayan, sanPedroMixtepec, sanPedroPochutla, sanPedroQuiatoni, sanPedroTapanatepec, sanPedroSanPabloAyutla, sanSebastianTecomaxtlahuaca, sanSimonZahuatlan, santaCatarinaJuquila, santaCruzXoxocotlan, santaCruzZenzontepec, santaLuciaCamino, santaLuciaMonteverde, santaMariaAtzompa, santaMariaChilchotla, santaMariaChimalapa, santaMariaColotepec, santaMariaHuatulco, santaMariaHuazolotitlan, santaMariaJacatepec, santaMariaAsuncion, santaMariaPetapa, santaMariaTlahuitoltepec, santaMariaTonaneca, santaMariaXadani, santaMariaZacatepec, santiagoAmoltepec, santiagoIxtayutla, santiagoJamiltepec, santiagoJocotepec, santiagoJuxtlahuaca, santiagoMatatlan, santiagoPinotepaNacional, santiagoYaitepec, santiagoZacatepec, santoDomingoMorelos, santoDomingoPetapa, santoDomingoTehuantepec, santoDomingoTepuxtepec, santoDomingoZanatepec, santosReyesNopala, tamazulapam, tlaco, unionHidalgo, villaTututepec, villaZaachila, villaSolaVega
]);

//agregar icono personalizado para los municipios prioritarios
municipiosPrioritarios.eachLayer(function(layer) {
    layer.setIcon(iconoPrioritario);
});


var masPrioritarios = L.layerGroup([
  yaitepec, coicoyanFlores, sanMiguelSantaFlor, peras, zahuatlan, huaute, ocopetatillo, pedropabloayutla, yosonotu, tilquiapan, ahuehuetitlan, huehuetlan, stamiahuatlan, apoala, bartolomeAyautla, juandiuxi, reyestepejillo, sanMixtepec, ateixtlahuaca, elox,  santiagoIxta, Sntenango
]);

//agregar icono personalizado para los municipios mas prioritarios
masPrioritarios.eachLayer(function(layer) {
    layer.setIcon(iconoMasPrioritario);
});

var municipiosVisitados = L.layerGroup([ 
    visitadoPochutla,visitadoJuchitan,visitadoOaxaca, visitadoPuerto, visitadoEtla, visitadoOcotlan, visitadoMiahuatlan, visitadoZimatlan, visitadoXoxocotlan, visitadoIxtlan
]);

municipiosVisitados.eachLayer(function(layer) {
    layer.setIcon(iconoVisitados);
});

var region_istmo = L.layerGroup([])
var region_valles = L.layerGroup([])
var region_mixteca = L.layerGroup([])
var region_costa = L.layerGroup([])
var region_cañada = L.layerGroup([])
var region_sierra_sur = L.layerGroup([])
var region_sierra_juarez = L.layerGroup([])
var region_cuenca = L.layerGroup([])



// Agregar el layer group al mapa por defecto
//coordinaciones.addTo(map);


// === AGREGAR CONTROL DE CAPAS ===

let baseMaps = {
  "Mapa Normal": osmLayer,
  "Satélite": satelliteLayer,
  "Topográfico": topoLayer,
  "Oscuro": darkLayer
};

//Capa vacia de plazas
const iconoSolo = L.layerGroup();

// === CAPAS SUPERPUESTAS (checkbox) ===
let overlayMaps = {
  '<img src="images/ieea_logo.png" width="18" height="18" style="position: relative; left: 14px;margin-right:14px;"> Plazas comunitarias': iconoSolo,
  '<img src="images/marcador-mapa.png" width="18" height="18"> Coordinaciones IEEA': coordinaciones,
  '<img src="images/prioritarios.png" width="18" height="18"> 100 Municipios prioritarios 2025': municipiosPrioritarios,
  '<img src="images/masprioritarios.png" width="18" height="18"> 29 Municipios Más Prioritarios': masPrioritarios,
  '<img src="images/visitados.png" width="18" height="18"> Municipios Visitados': municipiosVisitados,
  '<span style="color:green;">■</span> Istmo': region_istmo,
  '<span style="color:olive;">■</span> Valles Centrales': region_valles,
  '<span style="color:black;">■</span> Mixteca': region_mixteca,
  '<span style="color:pink;">■</span> Cuenca del Papaloapan': region_cuenca,
  '<span style="color:teal;">■</span> Cañada': region_cañada,
  '<span style="color:brown;">■</span> Sierra Norte': region_sierra_juarez,
  '<span style="color:lime;">■</span> Sierra Sur': region_sierra_sur,
  '<span style="color:gray;">■</span> Costa': region_costa
};

//L.control.layers(baseMaps, overlayMaps).addTo(map);
var control = L.control.layers(baseMaps, overlayMaps).addTo(map);


// Ocultar el checkbox de "Plazas comunitarias"
setTimeout(() => {
    document.querySelectorAll('.leaflet-control-layers-overlays label').forEach(label => {

        // Buscar el texto de la opción
        if (label.innerText.trim().includes('Plazas comunitarias')) {

            // Ocultar únicamente el checkbox
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.style.display = 'none';
            }

            // Opcional: quitar el margen que deja el checkbox
            label.style.paddingLeft = '6px';
        }
    });
}, 100);


// Agregar la capa inicial
osmLayer.addTo(map);


// === CARGAR GEOJSON DE MUNICIPIOS DE OAXACA ===
fetch('oaxaca.geojson')
  .then(response => response.json())
  .then(geojsonData => {
    // Crear capa GeoJSON con estilos para los municipios
    let municipiosLayer = L.geoJSON(geojsonData, {
      style: function(feature) {
        return {
          fillColor: 'white',
          weight: 1.5,
          opacity: 1,
          color: '#2C3E50',
          dashArray: '',
          fillOpacity: 0.25
        };
      },
      
      onEachFeature: function(feature, layer) {
        // Mostrar nombre del municipio al pasar el mouse
        let nombreMunicipio = feature.properties && feature.properties.NOMGEO ? feature.properties.NOMGEO : 'Municipio';                     
        let clave_cvgeo = feature.properties && feature.properties.CVEGEO ? feature.properties.CVEGEO : 'clave';
        layer.bindTooltip(nombreMunicipio, {
          permanent: false,
          direction: 'center',
          className: 'municipio-tooltip'
        });

        // Cambiar estilo al pasar el mouse
        layer.on({
          mouseover: function(e) {
            let layer = e.target;
            layer.setStyle({
              weight: 3,
              color: '#E74C3C',
              fillColor:"white",
              fillOpacity: 0.5
            });
            layer.bringToFront();
          },
          mouseout: function(e) {
            municipiosLayer.resetStyle(e.target);
          }
        });
        //console.log(layer.getLatLngs())
        //console.log(istmo_municipios.indexOf(clave_cvgeo)+" "+clave_cvgeo)
         if(istmo_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_istmo.push(layer_nuevo)
         }  

         if(valles_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_valles_centrales.push(layer_nuevo)
         }
         
         if(mixteca_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_mixteca.push(layer_nuevo)
         }

         if(cuenca_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_cuenca.push(layer_nuevo)
         }

         if(cañada_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_cañada.push(layer_nuevo)
         }

         if(costa_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_costa.push(layer_nuevo)
         }

         if(sierra_juarez_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_sierra_juarez.push(layer_nuevo)
         }      

          if(sierra_sur_municipios.indexOf(clave_cvgeo) !== -1){
          layer_nuevo = cloneLayer(layer)
          layers_sierra_sur.push(layer_nuevo)
         }    
      }
    });

 
    // Agregar al mapa    
    municipiosLayer.addTo(map);


    // Agregar al control de capas
    overlayMaps["Municipios de Oaxaca"] = municipiosLayer;
    L.control.layers(baseMaps, overlayMaps).remove();
   

    // Ajustar vista a los límites de Oaxaca (opcional)
    // map.fitBounds(municipiosLayer.getBounds());      
  })
  .catch(error => {
    console.error('Error al cargar oaxaca.geojson:', error);
  });    
  setTimeout(function(){

if(layers_istmo.length>0){
  layers_istmo.forEach(function(e){
        e.setStyle({
      color: 'green',       // Color del borde
      fillColor: 'green',   // Color de relleno
      fillOpacity: 0.5    // Opacidad del relleno
    })
    region_istmo.addLayer(e)
  })
}

if(layers_valles_centrales.length>0){
  layers_valles_centrales.forEach(function(e){
        e.setStyle({
      color: 'olive',        // Color del borde
      fillColor: 'olive',   // Color de relleno
      fillOpacity: 0.5     // Opacidad del relleno
    })
    region_valles.addLayer(e)
  })
}

if(layers_mixteca.length>0){
  layers_mixteca.forEach(function(e){
        e.setStyle({
      color: 'black',        // Color del borde
      fillColor: 'black',   // Color de relleno
      fillOpacity: 0.5      // Opacidad del relleno
    })
    region_mixteca.addLayer(e)
  })
}

if(layers_cuenca.length>0){
  layers_cuenca.forEach(function(e){
        e.setStyle({
      color: 'pink',        // Color del borde
      fillColor: 'pink',   // Color de relleno
      fillOpacity: 0.5      // Opacidad del relleno
    })
    region_cuenca.addLayer(e)
  })
}

if(layers_cañada.length>0){
  layers_cañada.forEach(function(e){
        e.setStyle({
      color: 'teal',        // Color del borde
      fillColor: 'teal',   // Color de relleno
      fillOpacity: 0.5      // Opacidad del relleno
    })
    region_cañada.addLayer(e)
  })
}

if(layers_costa.length>0){
  layers_costa.forEach(function(e){
        e.setStyle({
      color: 'gray',        // Color del borde
      fillColor: 'gray',   // Color de relleno
      fillOpacity: 0.5     // Opacidad del relleno
    })
    region_costa.addLayer(e)
  })
}

if(layers_sierra_juarez.length>0){
  layers_sierra_juarez.forEach(function(e){
        e.setStyle({
      color: 'brown',        // Color del borde
      fillColor: 'brown',   // Color de relleno
      fillOpacity: 0.5      // Opacidad del relleno
    })
    region_sierra_juarez.addLayer(e)
  })
}

if(layers_sierra_sur.length>0){
  layers_sierra_sur.forEach(function(e){
        e.setStyle({
      color: 'lime',        // Color del borde
      fillColor: 'lime',   // Color de relleno
      fillOpacity: 0.5      // Opacidad del relleno
    })
    region_sierra_sur.addLayer(e)
  })
}

},500)


//Plazas Comunitarias
//Icono personalizado de plazas comunitarias
var iconoPlazas = L.icon({
    iconUrl: 'images/ieea_logo.png',   // imagen principal
    iconSize: [32, 32],               // tamaño del icono
    iconAnchor: [16, 32],             // punto donde "pincha" en el mapa
    popupAnchor: [0, -32]             // posición del popup
});

//Tlacolula
let marcadoresTlacolula = L.layerGroup();
// plazas comunitarias de tlacolula
L.marker([16.66182, -95.99961]).addTo(marcadoresTlacolula).bindPopup("Gabriel García Marquez");
L.marker([16.60836, -95.98037]).addTo(marcadoresTlacolula).bindPopup("Nejapa de Madero");
L.marker([16.86386, -96.38514]).addTo(marcadoresTlacolula).bindPopup("Aula por México Matatlán");
L.marker([16.92212, -96.36232]).addTo(marcadoresTlacolula).bindPopup("San Pablo Villa de Mitla");
L.marker([17.07417, -96.64832]).addTo(marcadoresTlacolula).bindPopup("Miguel Cabrera");
L.marker([16.80456, -96.39334]).addTo(marcadoresTlacolula).bindPopup("Scuel Bingul");
L.marker([16.95657, -96.48237]).addTo(marcadoresTlacolula).bindPopup("Tlacolula de Matamoros");
L.marker([16.55886, -96.35325]).addTo(marcadoresTlacolula).bindPopup("Zoquitlan");
//agregar icono personalizado para tlacolula
marcadoresTlacolula.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Ocotlán de Morelos
let marcadoresOcotlan = L.layerGroup();
// plazas comunitarias de ocotlán
L.marker([16.61068 , -96.84994]).addTo(marcadoresOcotlan).bindPopup("Álvaro Obregón");
L.marker([16.50983 , -96.78923]).addTo(marcadoresOcotlan).bindPopup("San Agustín Amatengo");
L.marker([16.80331, -96.68459]).addTo(marcadoresOcotlan).bindPopup("José María del Castillo Velasco");
L.marker([16.78705, -96.67674]).addTo(marcadoresOcotlan).bindPopup("Josefa Ortiz de Dominguez");
L.marker([16.6823, -96.68561]).addTo(marcadoresOcotlan).bindPopup("San José del Progreso");
L.marker([16.46125, -96.78807]).addTo(marcadoresOcotlan).bindPopup("Sor Juana Inés de la Cruz");
L.marker([16.53706, -96.66518]).addTo(marcadoresOcotlan).bindPopup("Luis Donaldo Colosio Murrieta");
//agregar icono personalizado para ocotlán
marcadoresOcotlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Zimatlán de álvarez
let marcadoresZimatlan = L.layerGroup();
// plazas comunitarias de zimatlan
L.marker([16.86701, -96.7873]).addTo(marcadoresZimatlan).bindPopup("Zimatlán");
L.marker([16.87275, -96.80131]).addTo(marcadoresZimatlan).bindPopup("Nueva generación");
L.marker([16.83022, -96.78966]).addTo(marcadoresZimatlan).bindPopup("Cedetec Huixtepec");
//agregar icono personalizado para ocotlán
marcadoresZimatlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Miahuatlán de Porfirio Díaz
let marcadoresMiahuatlan = L.layerGroup();
// plazas comunitarias de miahuatlan
L.marker([16.09396, -96.46653]).addTo(marcadoresMiahuatlan).bindPopup("Suchixtepec");
L.marker([16.38004, -96.58574]).addTo(marcadoresMiahuatlan).bindPopup("CEFERESO No 13 Oaxaca");
L.marker([16.331575, -96.5971503]).addTo(marcadoresMiahuatlan).bindPopup("La esperanza CERESO Miahuatlan");
//agregar icono personalizado para ocotlán
marcadoresMiahuatlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Santo Domingo Tehuantepec
let marcadoresTehuantepec = L.layerGroup();
// plazas comunitarias de Tehuantepec
L.marker([16.50019, -96.10637]).addTo(marcadoresTehuantepec).bindPopup("San Carlos Yautepec");
L.marker([16.37338, -95.26124]).addTo(marcadoresTehuantepec).bindPopup("La Pequeña Venecia");
L.marker([16.86339, -95.4299]).addTo(marcadoresTehuantepec).bindPopup("Instalaciones del INEA");
L.marker([16.18228, -95.19591]).addTo(marcadoresTehuantepec).bindPopup("Parque de los niños");
L.marker([16.32996, -95.22549]).addTo(marcadoresTehuantepec).bindPopup("San Blas atempa");
L.marker([16.68678, -95.53226]).addTo(marcadoresTehuantepec).bindPopup("Juventud en desarrollo");
L.marker([16.0289, -95.66868]).addTo(marcadoresTehuantepec).bindPopup("San pedro huamelula");
L.marker([16.32952, -95.26524]).addTo(marcadoresTehuantepec).bindPopup("CERESO Tehuantepec");
L.marker([16.24409, -95.1582]).addTo(marcadoresTehuantepec).bindPopup("Margarita Maza de Juárez");
L.marker([16.24409, -95.1582]).addTo(marcadoresTehuantepec).bindPopup("Jalapa del Marqués");
//agregar icono personalizado para ocotlán
marcadoresTehuantepec.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Matias Romero
let marcadoresMatias = L.layerGroup();
// plazas comunitarias de Matías Romero
L.marker([16.80394, -95.11196]).addTo(marcadoresMatias).bindPopup("Barrio de la soledad");
L.marker([17.10277, -94.88753]).addTo(marcadoresMatias).bindPopup("Colonia Cuauhtemoc");
L.marker([16.96221, -95.09736]).addTo(marcadoresMatias).bindPopup("San Juan Guichicovi");
L.marker([17.1658, -94.7862]).addTo(marcadoresMatias).bindPopup("La esmeralda");
L.marker([16.87564, -95.04075]).addTo(marcadoresMatias).bindPopup("Matías romero");
L.marker([16.7144591, -94.7482224]).addTo(marcadoresMatias).bindPopup("Santa María Chimalapa");
L.marker([17.22544, -95.0499]).addTo(marcadoresMatias).bindPopup("Donaji");
//agregar icono personalizado para ocotlán
marcadoresMatias.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Teotitlán de Flores Magón
let marcadoresTeotitlan = L.layerGroup();
// plazas comunitarias de Teotitlán
L.marker([18.133333,-97.083333]).addTo(marcadoresTeotitlan).bindPopup("Hermanos flores magón");
L.marker([17.79991, -96.96011]).addTo(marcadoresTeotitlan).bindPopup("Tierra del canto");
//agregar icono personalizado para ocotlán
marcadoresTeotitlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Nochixtlan
let marcadoresNochixtlan = L.layerGroup();
// plazas comunitarias de Nochixtlán
L.marker([17.32308, -97.221]).addTo(marcadoresNochixtlan).bindPopup("Punto de encuentro municipal");
//agregar icono personalizado para Nochixtlan
marcadoresNochixtlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Nochixtlan
let marcadoresTlaxiaco = L.layerGroup();
// plazas comunitarias de Nochixtlán
L.marker([17.67322, -97.57357]).addTo(marcadoresTlaxiaco).bindPopup("Chocho-Mixteca");
L.marker([16.872837,	-97.57753]).addTo(marcadoresTlaxiaco).bindPopup("Santiago Yosondúa");
L.marker([17.03145, -97.57084]).addTo(marcadoresTlaxiaco).bindPopup("Yundeya.com");
L.marker([17.3060786, -97.4896883]).addTo(marcadoresTlaxiaco).bindPopup("San miguel achihuatla");
//agregar icono personalizado para Tlaxiaco
marcadoresTlaxiaco.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Huajuapan
let marcadoresHuajuapan = L.layerGroup();
// plazas comunitarias de Huajuapan
L.marker([17.82301, -97.73895]).addTo(marcadoresHuajuapan).bindPopup("Alpha-je");
L.marker([18.06466, -97.60177]).addTo(marcadoresHuajuapan).bindPopup("Zapoquila");
L.marker([17.79347, -97.78899]).addTo(marcadoresHuajuapan).bindPopup("El carmen");
L.marker([17.65439, -97.80677]).addTo(marcadoresHuajuapan).bindPopup("Parroquia señor de la capilla");
L.marker([17.82672, -97.73407]).addTo(marcadoresHuajuapan).bindPopup("Santiago Huajolotitlán");
L.marker([17.88933, -97.81799]).addTo(marcadoresHuajuapan).bindPopup("Ciencia y progreso");
L.marker([ 17.501807,	-98.142137]).addTo(marcadoresHuajuapan).bindPopup("Tlacayoapam");
marcadoresHuajuapan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Pinotepa nacional
let marcadoresPinotepa = L.layerGroup();
//Plazas comunitarias de pinotepa
L.marker([16.76293, -97.98995]).addTo(marcadoresPinotepa).bindPopup("Zacatepec");
L.marker([16.3382, -98.04906]).addTo(marcadoresPinotepa).bindPopup("Pinotepa");
L.marker([16.48933, -98.29002]).addTo(marcadoresPinotepa).bindPopup("Nuevas raíces");
L.marker([16.45208, -98.01357]).addTo(marcadoresPinotepa).bindPopup("Jicayán");
L.marker([16.63626,-98.19216]).addTo(marcadoresPinotepa).bindPopup("Buena vista cacahutepec");
marcadoresPinotepa.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Puerto escondido
let marcadoresPuerto = L.layerGroup();
//Plazas comunitarias de puerto
L.marker([16.0139, -97.43748]).addTo(marcadoresPuerto).bindPopup("Río grande");
L.marker([15.89809, -96.93875]).addTo(marcadoresPuerto).bindPopup("Ranulfo velasco santiago");
L.marker([16.13008, -97.60855]).addTo(marcadoresPuerto).bindPopup("Villa de tututepec ");
marcadoresPuerto.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Ixtlán
let marcadoresIxtlan = L.layerGroup();
//Plazas comunitarias de ixtlan 
L.marker([17.33183, -96.48791]).addTo(marcadoresIxtlan).bindPopup("Laa Yetzi");
marcadoresIxtlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Tuxtepex
let marcadoresTuxtepec = L.layerGroup();
//Plazas comunitarias de Tuxtepex
L.marker([18.53646, -96.60935]).addTo(marcadoresTuxtepec).bindPopup("Acatlán de pérez figeroa");
L.marker([17.7745, -96.30457]).addTo(marcadoresTuxtepec).bindPopup("Valle nacional");
L.marker([18.24747, -96.40192]).addTo(marcadoresTuxtepec).bindPopup("Temazcal");
L.marker([18.08255, -96.15291]).addTo(marcadoresTuxtepec).bindPopup("Las flores");
L.marker([18.51547, -96.53019]).addTo(marcadoresTuxtepec).bindPopup("Vicente");
marcadoresTuxtepec.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Ayutla Mixe
let marcadoresAyutla = L.layerGroup();
//Plazas comunitaras de Ayutla Mixe
L.marker([17.25875, -96.02711]).addTo(marcadoresAyutla).bindPopup("Totontepec");
L.marker([17.093056, -96.064444]).addTo(marcadoresAyutla).bindPopup("Santa maria tlahuitoltepec");
L.marker([16.9738, -95.76045]).addTo(marcadoresAyutla).bindPopup("San miguel quetzaltepec");
L.marker([17.103, -95.951]).addTo(marcadoresAyutla).bindPopup("Casa de educación ara el pueblo");
marcadoresAyutla.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Etla
let marcadoresEtla = L.layerGroup();
//Plazas comunitaras Etla
L.marker([17.20758, -96.8008]).addTo(marcadoresEtla).bindPopup("Etla");
L.marker([17.12918, -96.80206]).addTo(marcadoresEtla).bindPopup("San laronzo cacaotepec");
L.marker([17.12918, -96.80206]).addTo(marcadoresEtla).bindPopup("San jacinto amilpas");
L.marker([17.10072, -96.77872]).addTo(marcadoresEtla).bindPopup("Niños héroes");
L.marker([17.27413, -96.88418]).addTo(marcadoresEtla).bindPopup("San pablo huitzo");
L.marker([17.17162, -96.82063]).addTo(marcadoresEtla).bindPopup("Profa Lidia López González");
L.marker([17.29672, -96.90461]).addTo(marcadoresEtla).bindPopup("San francisco telixtlahuaca");
marcadoresEtla.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Juxtlahuaca
let marcadoresJuxtlahuaca = L.layerGroup();
//Plazas comunitaras Juxtlahuaca
L.marker([17.33547, -98.01237]).addTo(marcadoresJuxtlahuaca).bindPopup("Santiago juxtlahuaca yosocuilla");
L.marker([17.02611474, -97.92789225]).addTo(marcadoresJuxtlahuaca).bindPopup("Tepochcalli");
marcadoresJuxtlahuaca.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});


//Oaxaca
let marcadoresOaxaca = L.layerGroup();
//Plazas comunitarias de Oaxaca
L.marker([17.0731842,-96.7265889]).addTo(marcadoresOaxaca).bindPopup("Ricardo flores magón");
L.marker([17.05543, -96.73332]).addTo(marcadoresOaxaca).bindPopup("20 de Noviembre");
L.marker([17.0575, -96.68194]).addTo(marcadoresOaxaca).bindPopup("Santa cruz amilpas");
L.marker([17.10567303, -96.75055944]).addTo(marcadoresOaxaca).bindPopup("CROC Oaxaca");
L.marker([17.09659, -96.72078]).addTo(marcadoresOaxaca).bindPopup("Montoya");
L.marker([17.09028, -96.74861]).addTo(marcadoresOaxaca).bindPopup("Agencia santa rosa");
L.marker([17.12915, -96.75023]).addTo(marcadoresOaxaca).bindPopup("Trinidad de viguera");
L.marker([17.05874, -96.71493]).addTo(marcadoresOaxaca).bindPopup("Serafin aguilar franco");
L.marker([17.06772, -96.67055]).addTo(marcadoresOaxaca).bindPopup("Alfredo harp helú");
marcadoresOaxaca.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});


//María Lombardo
let marcadoresLombardo = L.layerGroup();
//Plazas comunitarias de María Lombardo
L.marker([17.14319, -95.71874]).addTo(marcadoresLombardo).bindPopup("María lombardo");
L.marker([17.2984, -95.4918]).addTo(marcadoresLombardo).bindPopup("San juan cotzocon");
L.marker([17.16238, -95.77914]).addTo(marcadoresLombardo).bindPopup("Emiliano zapata");
marcadoresLombardo.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Huautla de jimenez
let marcadoresHuautla = L.layerGroup();
//Plazas comunitarias de Huautla
L.marker([18.14352667,-96.86817349]).addTo(marcadoresHuautla).bindPopup("Yoloxochitlan");
marcadoresHuautla.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Jamiltepec
let marcadoresJamiltepec = L.layerGroup();
//Plazas de jamiltepec
L.marker([16.278333, -97.82]).addTo(marcadoresJamiltepec).bindPopup("Jamilli");
L.marker([16.40139, -97.80694]).addTo(marcadoresJamiltepec).bindPopup("SA A YUKU");
marcadoresJamiltepec.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Xoxocotlán
let marcadoresXoxocotlan = L.layerGroup();
//Plazas de xoxocotlan
L.marker([16.93222, -96.70039]).addTo(marcadoresXoxocotlan).bindPopup("Vicente guerrero");
L.marker([16.93306, -96.70139]).addTo(marcadoresXoxocotlan).bindPopup("Centro comunitario educacional vicente guerrero");
L.marker([16.9507, -96.75054]).addTo(marcadoresXoxocotlan).bindPopup("Zaachila");
L.marker([17.02183, -96.73465]).addTo(marcadoresXoxocotlan).bindPopup("Centro de bienestar social IMSS");
L.marker([17.01197, -96.71274]).addTo(marcadoresXoxocotlan).bindPopup("San agustín");
L.marker([17.00406, -96.75627]).addTo(marcadoresXoxocotlan).bindPopup("La soledad");
marcadoresXoxocotlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Pochutla
let marcadoresPochutla = L.layerGroup();
//Plazas de pochutla
L.marker([15.8346, -96.3236]).addTo(marcadoresPochutla).bindPopup("Biblioteca Santa María Huatulco");
L.marker([15.77006, -96.12805]).addTo(marcadoresPochutla).bindPopup("CROC Santa Cruz Huatulco");
marcadoresPochutla.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Zanatepec
let marcadoresZanatepec = L.layerGroup();
//Plazas de zanatepec
L.marker([16.476, -94.82935]).addTo(marcadoresZanatepec).bindPopup("Rancho gubiña");
L.marker([16.36623, -94.19427]).addTo(marcadoresZanatepec).bindPopup("Foro ecológico");
L.marker([16.399046, -94.460164]).addTo(marcadoresZanatepec).bindPopup("Reforma de pineda");
L.marker([16.48267, -94.354]).addTo(marcadoresZanatepec).bindPopup("Santo domingo zanatepec");
L.marker([16.29203, -94.19487]).addTo(marcadoresZanatepec).bindPopup("Pueblo y gobierno");
marcadoresZanatepec.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

//Ojitlan
let marcadoresOjitlan = L.layerGroup();
//Plazas de zanatepec
L.marker([18.05841, -96.39695]).addTo(marcadoresOjitlan).bindPopup("Ojitlán");
L.marker([17.820055, -96.509188]).addTo(marcadoresOjitlan).bindPopup("San felipe usila");
marcadoresOjitlan.eachLayer(function(layer) {
    layer.setIcon(iconoPlazas);
});

// === SELECT DE COORDINACIONES ===
document.getElementById('select-location').addEventListener('change', function(e) {

    // Ocultar todos los grupos de marcadores
    map.removeLayer(marcadoresTlacolula);
    map.removeLayer(marcadoresOcotlan);
    map.removeLayer(marcadoresZimatlan);
    map.removeLayer(marcadoresMiahuatlan);
    map.removeLayer(marcadoresTehuantepec);
    map.removeLayer(marcadoresMatias);
    map.removeLayer(marcadoresTeotitlan);
    map.removeLayer(marcadoresNochixtlan);
    map.removeLayer(marcadoresTlaxiaco);
    map.removeLayer(marcadoresHuajuapan);
    map.removeLayer(marcadoresPinotepa);
    map.removeLayer(marcadoresPuerto);
    map.removeLayer(marcadoresIxtlan);
    map.removeLayer(marcadoresTuxtepec);
    map.removeLayer(marcadoresAyutla);
    map.removeLayer(marcadoresEtla);
    map.removeLayer(marcadoresJuxtlahuaca);
    map.removeLayer(marcadoresOaxaca);
    map.removeLayer(marcadoresLombardo);
    map.removeLayer(marcadoresHuautla);
    map.removeLayer(marcadoresJamiltepec);
    map.removeLayer(marcadoresXoxocotlan);
    map.removeLayer(marcadoresPochutla);
    map.removeLayer(marcadoresZanatepec);
    map.removeLayer(marcadoresOjitlan);
    

    const valor = e.target.value;
    const coords = valor.split(',');

    if (coords.length === 2) {
        const lat = parseFloat(coords[0]);
        const lng = parseFloat(coords[1]);
        map.setView([lat, lng], 12);
    }

    // Mostrar marcadores de Tlacolula
    if (valor === "16.954167,-96.479167") {
        marcadoresTlacolula.addTo(map);
    }

    // Mostrar marcadores de Ocotlán
    if (valor === "16.791389,-96.691667") {
        marcadoresOcotlan.addTo(map);
    }

    // Mostrar marcadores de Zimatlan
    if (valor === "16.77,-96.95") {
        marcadoresZimatlan.addTo(map);
    }

    // Mostrar marcadores de Miahuatlan
    if (valor === "16.3327,-96.59558") {
        marcadoresMiahuatlan.addTo(map);
    }

    
    // Mostrar marcadores de Tehuantepec
    if (valor === "16.31841,-95.24783") {
        marcadoresTehuantepec.addTo(map);
    }

    // Mostrar marcadores de Matias
    if (valor === "16.8754,-95.04106") {
        marcadoresMatias.addTo(map);
    }

    // Mostrar marcadores de Teotitlán
    if (valor === "18.133333,-97.083333") {
        marcadoresTeotitlan.addTo(map);
    }

    // Mostrar marcadores de Teotitlán
    if (valor === "17.4588,-97.22163") {
        marcadoresNochixtlan.addTo(map);
    }

    // Mostrar marcadores de Tlaxiaco
    if (valor === "17.2700, -97.67790") {
        marcadoresTlaxiaco.addTo(map);
    }

    // Mostrar marcadores de Huajuapan
    if (valor === "17.8042, -97.78069") {
        marcadoresHuajuapan.addTo(map);
    }

    // Mostrar marcadores de pinotepa nacional
    if (valor === "16.3381, -98.04850") {
        marcadoresPinotepa.addTo(map);
    }

    // Mostrar marcadores de puerto
    if (valor === "15.8658, -97.06923") {
        marcadoresPuerto.addTo(map);
    }

    // Mostrar marcadores de ixtlan
    if (valor === "17.3341, -96.48677") {
        marcadoresIxtlan.addTo(map);
    }

    // Mostrar marcadores de Tuxtepec
    if (valor === "18.0936, -96.13147") {
        marcadoresTuxtepec.addTo(map);
    }

    
    // Mostrar marcadores de Ayutla Mixe
    if (valor === "17.0279, -96.07599") {
        marcadoresAyutla.addTo(map);
    }

     // Mostrar marcadores de Etla
    if (valor === "17.2054, -96.80044") {
        marcadoresEtla.addTo(map);
    }

      // Mostrar marcadores de Juxtlahuaca
    if (valor === "17.3336, -98.00988") {
        marcadoresJuxtlahuaca.addTo(map);
    }

       // Mostrar marcadores de Oaxaca
    if (valor === "17.0692, -96.71734") {
        marcadoresOaxaca.addTo(map);
    }

       // Mostrar marcadores de Lombardo
    if (valor === "17.4492, -95.42823") {
        marcadoresLombardo.addTo(map);
    }

      // Mostrar marcadores de Huautla
    if (valor === "18.1296, -96.83831") {
        marcadoresHuautla.addTo(map);
    }

     // Mostrar marcadores de Jamiltepec
    if (valor === "16.2793, -97.81914") {
        marcadoresJamiltepec.addTo(map);
    }

    // Mostrar marcadores de xoxocotlan
    if (valor === "17.0259, -96.73453") {
        marcadoresXoxocotlan.addTo(map);
    }

    // Mostrar marcadores de pochutla
    if (valor === "15.7406, -96.46812") {
        marcadoresPochutla.addTo(map);
    }

    // Mostrar marcadores de Zanatepec
    if (valor === "16.4833, -94.35568") {
        marcadoresZanatepec.addTo(map);
    }

     // Mostrar marcadores de Ojitlán
    if (valor === "18.0591, -96.39639") {
        marcadoresOjitlan.addTo(map);
    }

});
osmLayer.setOpacity(0);
document.addEventListener('DOMContentLoaded', (event) => {
  //document.getElementById("data").innerText = (typeof(municipiosLayer));  
});

