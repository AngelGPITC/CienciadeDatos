let map;
let heatmap;
let userMarker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: {
      lat: 4.60971,
      lng: -74.08175
    },
    mapTypeId: "roadmap",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  // Obtén la ubicación del usuario y muestra un marcador en ese lugar
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocalización no es compatible con este navegador.");
  }
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}
/**
// Heatmap data: 500 Points
function getPoints() {
  return new Promise((resolve, reject) => {
    fetch('/coordinates')
      .then(response => response.json())
      .then(data => {
        const points = data.map(point => new google.maps.LatLng(point.lat, point.lng));
        resolve(points);
      })
      .catch(error => reject(error));
  });
}
**/
// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(4.616, -74.158),
    // Agrega más puntos aquí
  ];
}


// Muestra la posición actual del usuario en el mapa
function showPosition(position) {
  if (!map) {
    // Si el mapa aún no se ha creado, espera hasta que se cargue
    return;
  }

  var userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  alert(userLocation);

  if (userMarker) {
    // Si ya existe un marcador de usuario, actualiza su posición
    userMarker.setPosition(userLocation);
  } else {
    // Si no existe un marcador de usuario, crea uno
    userMarker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: "Mi ubicación",
    });
  }

  // Centra el mapa en la ubicación del usuario
  map.setCenter(userLocation);
  map.setZoom(16); // Establece el zoom en 16 para acercar el mapa a la ubicación del usuario
}

window.initMap = initMap;