document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.querySelector('#traeth-bychan-map');
  if (!mapElement || typeof L === 'undefined') return;

  const traethBychan = [53.3409185,-4.2343953];
  const map = L.map(mapElement).setView(traethBychan, 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  L.marker(traethBychan)
    .addTo(map)
    .bindPopup('<strong>Traeth Bychan</strong><br>Home of Moelfre Rowing Club')
    .openPopup();
});
