
function loadMaps() {
    document.getElementById("map").innerHTML = initMap;
}


  // The following example creates a marker in Stockholm, Sweden using a DROP
  // animation. Clicking on the marker will toggle the animation between a BOUNCE
  // animation and no animation.

  var marker;

  var altitudes=[ 40.72600729999999, 40.6800897, 40.74929339999999,40.6522003, 40.8833273 ];
  var longitudes =[-74.00115240000002, -73.841681,  -73.97592100000003, -73.93075809999999, -73.86273469999998];
  var titles = ["Bitcoin Center NYC", "Coinsource Bitcoin ATM", "Gemini", "Bitcoin Center NYC ATM", "Coinsource Bitcoin ATM"];

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 40.87331830000001, lng: -73.8941395}
    });

    for (x=0; x<altitudes.length; ++x ){

      marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: altitudes[x], lng: longitudes[x]},
      title:titles[x]
      
    });
   }
    
    marker.addListener('click', toggleBounce);
  }



  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8tUy2x6klMGgj4GxUtN-mb1aS3AraYvA&callback=initMap">
</script>