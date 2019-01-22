// ------------------------- MAPS API --------------------------

var map;
function initMap() {

  var myOptions = {
    zoom: 17,
    center: new google.maps.LatLng(-33.91722, 151.23064),
    mapTypeId: 'roadmap'
  }

  var myOptions2 = {
    zoom: 17,
    center: new google.maps.LatLng(-33.91539, 151.22820),
    mapTypeId: 'roadmap'
  }

  if ($('#map').length) {
    map = new google.maps.Map(document.getElementById("map"), myOptions);
  }

  if ($('#map-detail').length) {
    map2 = new google.maps.Map(document.getElementById("map-detail"), myOptions2);
  }



  // map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 17,
  //   center: new google.maps.LatLng(-33.91722, 151.23064),
  //   mapTypeId: 'roadmap'
  // });
  //
  // map-detail = new google.maps.Map(document.getElementById('map-detail'), {
  //   zoom: 17,
  //   center: new google.maps.LatLng(-33.91722, 151.23064),
  //   mapTypeId: 'roadmap'
  // });

  var iconBase = 'assets/svg/';
  var icons = {
    premium: {
      icon: iconBase + 'marker_premium.png'
    },
    ambassador: {
      icon: iconBase + 'marker_ambassador.png'
    },
    verkooppunt: {
      icon: iconBase + 'marker_verkooppunt.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.22630),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91910, 151.22907),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91790, 151.23463),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.916988, 151.233640),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    }, {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: 'ambassador',
      url: 'https://www.flex1848.be/',
    }, {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: 'ambassador',
      url: 'https://www.flex1848.be/'
    }, {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: 'verkooppunt',
      url: 'http://www.moeys.be/'
    }
  ];

  var dealerdetail = [
    {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: 'premium',
      url: 'http://www.all-vac.be/'
    },
  ];

  //
  // function addmarkers (feature) {
  //   console.log('geklikt');
  //   console.log(feature);
  //
  //     // window.open(
  //     //   feature.url,
  //     //   '_blank'
  //     // );
  //
  // }
  // Create markers.
  // for (var i = 0; i < features.length; i++) {
  //
  //       // features[i].
  //       var marker = new google.maps.Marker({
  //           position: features[i].position,
  //           icon: icons[features[i].type].icon,
  //           map: map,
  //         });
  //
  //       google.maps.event.addListener(marker, 'click', function(features[i]) {
  //         // console.log(features[2].url);
  //         addmarkers([i]);
  //
  //         console.log([i]);
  //
  //         // window.open(
  //         //   features[i].url,
  //         //   '_blank'
  //         // );
  //       });
  //   }
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
    });

    google.maps.event.addListener(marker, 'click', function() {
      window.open(
        feature.url,
        '_blank'
      );
    });
  });

  dealerdetail.forEach(function(dealer) {

    if ($('#map-detail').length) {
      var marker2 = new google.maps.Marker({
        position: dealer.position,
        icon: icons[dealer.type].icon,
        map: map2,
      });

      google.maps.event.addListener(marker2, 'click', function() {
        window.open(
          dealer.url,
          '_blank'
        );
      });
    }

  });

}
