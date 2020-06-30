function initialize() {
    var locations = [
      ['Eat Healthy 81-107 Gdynia ul. Płk Dąbka 73/II/4', 54.5523775, 18.5335905, 1],
      ["Eat Healthy 84-230 Rumia ul. Gdańska 33/57", 54.566967, 18.4087153, 2],
	    ['Eat Healthy 80-422 Gdańsk ul. Lelewela 17/7 ', 54.3827373, 18.6124405, 3],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(54.4159388,18.3440066),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyALMxoFS1mcQrGZCpm6pktSn5Ie3vz_kT8' + '&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
