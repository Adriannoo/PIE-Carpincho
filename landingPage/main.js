document.addEventListener('DOMContentLoaded', () => {
  // Simple navigation: header buttons scroll to sections
  const contatoBtn = document.querySelector('.contato-3');
  const quemBtn = document.querySelector('.quem-somos-5');
  const servBtn = document.querySelector('.servicos');

  function safeScroll(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (contatoBtn) contatoBtn.addEventListener('click', (e) => { e.preventDefault(); safeScroll('contato'); });
  if (quemBtn) quemBtn.addEventListener('click', (e) => { e.preventDefault(); safeScroll('quem-somos'); });
  if (servBtn) {
    // If the services element is an anchor, allow normal navigation.
    if (servBtn.tagName && servBtn.tagName.toLowerCase() === 'a') {
      // nothing to do — native navigation will follow the href
    } else {
      servBtn.addEventListener('click', (e) => { e.preventDefault(); window.location.href = '../servicos/index.html'; });
    }
  }

  // keyboard support (Enter/Space)
  [contatoBtn, quemBtn, servBtn].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); btn.click();
      }
    });
  });

  // Initialize Leaflet map in #map if present
  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    // Default coordinates set to Foz do Iguaçu (example)
    const lat = -25.5163;
    const lng = -54.5851;
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map).bindPopup('Nossa Oficina').openPopup();
  }
});
