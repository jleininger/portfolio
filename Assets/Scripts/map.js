function initialize() {
    var mapCanvas = document.getElementById("map_canvas");
    var target = new google.maps.LatLng(40.766211, -111.890721); 
    var mapOptions = {
        center: target,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    var marker = new google.maps.Marker({
        position: target,
        title: "This is my school!"
    });
    
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
