var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(50.724104,7.114887),
		L.latLng(50.626108,6.947908),
		L.latLng(51.626108,8.947908),
	],
	geocoder: L.Control.Geocoder.nominatim(),
	router: L.Routing.ors('58d904a497c67e00015b45fca1cedc95775b47ecb9b0f391234b5ea8'),
	routeWhileDragging: false	
})).addTo(map);

L.Routing.errorControl(control).addTo(map);