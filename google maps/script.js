let map;
let marker;
var position = {lat: 49.2992, lng: 19.9496};

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: position, draggable: false});
  }

navigator.geolocation.getCurrentPosition(success,fail);

function success(e){

    position = {lat:e.coords.latitude,lng:e.coords.longitude};
    map.panTo(position);
    marker = new google.maps.Marker({position: position, map: map, icon: "icon.png"});
    mapReady();
}
function fail(){
    alert("pozycja nie została udostępniona");
    marker = new google.maps.Marker({position: position, map: map, icon: "icon.png"});
    mapReady();
}

let arrowdown = false;
let arrowleft = false;
let arrowright = false;
let arrowup = false;

window.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowUp":
        arrowup = true;
        break;
        case "ArrowDown":
        arrowdown = true;
        break;
        case "ArrowLeft":
        arrowleft = true;
        break;
        case "ArrowRight":
        arrowright = true;
        break;
    }
})
window.addEventListener("keyup",function(e){
    switch(e.key){
        case "ArrowUp":
        arrowup = false;
        break;
        case "ArrowDown":
        arrowdown = false;
        break;
        case "ArrowLeft":
        arrowleft = false;
        break;
        case "ArrowRight":
        arrowright = false;
        break;
    }
})

function mapReady(){
    setInterval(function(){

        if(arrowup)
            position.lat += 0.00003;
        if(arrowdown)
            position.lat -= 0.00003;
        if(arrowright)
            position.lng += 0.00003;
        if(arrowleft)
            position.lng -= 0.00003;
        marker.setPosition(new google.maps.LatLng(position.lat,position.lng));
        map.panTo(position);
    },50)
}