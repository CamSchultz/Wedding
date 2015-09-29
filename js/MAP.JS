/*! Funky Google Maps scripts

-- Latitude /Longitude for addresses are:
3509 Creek Road, Dripping Springs, TX 78620        - (30.184479, -98.1446)
12013 Hwy 290, Austin, TX 78737             - (30.210552, -97.9687627)
2720 E Hwy 290, Dripping Springs, TX 78620      - (30.193378, -98.043798)
*/

function initialize() {

  var myLatlngCL = new google.maps.LatLng(30.184479, -98.1446);

  var myLatlng290 = new google.maps.LatLng(30.210552, -97.9687627);

  var myLatlngSI = new google.maps.LatLng(30.193378, -98.043798);

  var mapOptionsCL = {

    zoom: 5,

    center: myLatlngCL,

    mapTypeId: google.maps.MapTypeId.ROADMAP,

    mapTypeControl: 0

  }
   var mapOptions290 = {

    zoom: 5,

    center: myLatlng290,

    mapTypeId: google.maps.MapTypeId.ROADMAP,

    mapTypeControl: 0

    }

  var mapOptionsSI = {

    zoom: 5,

    center: myLatlngSI,

mapTypeId: google.maps.MapTypeId.ROADMAP,

    mapTypeControl: 0

    }

  var mapCL = new google.maps.Map(document.getElementById('map-CL'), mapOptionsCL);

  var map290 = new google.maps.Map(document.getElementById('map-290'), mapOptions290);

  var mapSI = new google.maps.Map(document.getElementById('map-SI'), mapOptionsSI);

  var markerCL = new google.maps.Marker({

      position: myLatlngCL,

      map: mapCL,

      title: 'Camp Lucy
      
      var marker290 = new google.maps.Marker({

      position: myLatlng290,

      map: map290,

      title: '290 West Club'

  });      

  var markerSI = new google.maps.Marker({

      position: myLatlngSI,

      map: mapSI,

      title: 'Sleep Inn & Suites'

  });

}  
google.maps.event.addDomListener(window, 'load', initialize);

  });
