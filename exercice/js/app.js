var adress = [48.8333396, 2.3717968];
var mymap = L.map('mapid').setView(adress, 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker(adress).addTo(mymap);