const GITHUB_USER = 'sopwerdream';
const REPO_NAME = 'Super-Toy-Super-Food';

const artistBaseURL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}/assets/artists/`;
const galleryBaseURL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}/assets/gallery/`;

const artistSlider = document.getElementById('artistSlider');
const galleryContainer = document.getElementById('galleryContainer');

// โหลดไฟล์ JSON รายชื่อรูปภาพศิลปิน
fetch(`${artistBaseURL}artists.json`)
  .then(res => res.json())
  .then(data => {
    data.forEach((file, index) => {
      const card = document.createElement('div');
      card.className = 'artist-card';
      card.innerHTML = `
        <img src="${artistBaseURL}${file}" alt="Artist ${index + 1}">
        <h3>${file.replace('.png', '')}</h3>
      `;
      artistSlider.appendChild(card);
    });
  })
  .catch(err => console.error('โหลด artists.json ไม่ได้:', err));

// โหลดแกลเลอรี่
fetch(`${galleryBaseURL}gallery.json`)
  .then(res => res.json())
  .then(data => {
    data.forEach((file, index) => {
      const img = document.createElement('img');
      img.src = `${galleryBaseURL}${file}`;
      img.alt = `Gallery ${index + 1}`;
      galleryContainer.appendChild(img);
    });
  })
  .catch(err => console.error('โหลด gallery.json ไม่ได้:', err));

// ฟังก์ชันเลื่อน slider
function scrollArtists(direction) {
  const scrollAmount = 320;
  if (direction === 'left') {
    artistSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    artistSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
