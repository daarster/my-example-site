$(document).ready(function() {
	function initialize() {
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(43.5665717, 22.2548983),
			styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var image = 'images/logo-map.png';
		var myLatLng = new google.maps.LatLng(43.572523, 22.2656181);
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
		});
	};

	google.maps.event.addDomListener(window, 'load', initialize);
});