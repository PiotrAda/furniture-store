function initialize() {
var Andrychow = new google.maps.LatLng(49.855698,19.337473);
var Cieszyn = new google.maps.LatLng(49.753483,18.645410);
var Jastrzebie = new google.maps.LatLng(49.950804,18.623360);
var Oswiecim = new google.maps.LatLng(50.031066,19.262932);
var Kety = new google.maps.LatLng(49.880672,19.220686);

var mapOptionsAndrychow = {
    zoom: 15,
    center: Andrychow,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
  }
var mapOptionsCieszyn = {
    zoom: 15,
    center: Cieszyn,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }
var mapOptionsJastrzebie = {
    zoom: 15,
    center: Jastrzebie,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }
var mapOptionsOswiecim = {
    zoom: 15,
    center: Oswiecim,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }
var mapOptionsKety = {
    zoom: 15,
    center: Kety,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }
	
  var mapAndrychow = new google.maps.Map(document.getElementById('map-Andrychow'), mapOptionsAndrychow);
  var mapCieszyn = new google.maps.Map(document.getElementById('map-Cieszyn'), mapOptionsCieszyn);
  var mapJastrzebie = new google.maps.Map(document.getElementById('map-Jastrzebie'), mapOptionsJastrzebie);
  var mapOswiecim = new google.maps.Map(document.getElementById('map-Oswiecim'), mapOptionsOswiecim);
  var mapKety = new google.maps.Map(document.getElementById('map-Kety'), mapOptionsKety);
  
  var markerOH = new google.maps.Marker({
      position: Andrychow,
      map: mapAndrychow,
      title: 'Andrychow'
  });
  var markerCA = new google.maps.Marker({
      position: Cieszyn,
      map: mapCieszyn,
      title: 'Cieszyn'
  });      
  var markerUK = new google.maps.Marker({
      position: Jastrzebie,
      map: mapJastrzebie,
      title: 'Jastrzebie'
  });
    var markerUK = new google.maps.Marker({
      position: Oswiecim,
      map: mapOswiecim,
      title: 'Oswiecim'
  });
      var markerUK = new google.maps.Marker({
      position: Kety,
      map: mapKety,
      title: 'Kety'
  });
}  

google.maps.event.addDomListener(window, 'load', initialize);