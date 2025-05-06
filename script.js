// กำหนด path ของ GitHub repo
const GITHUB_USER = 'sopwerdream';
const REPO_NAME = 'Super-Toy-Super-Food';

const artistBaseURL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}/assets/artists/`;
const galleryBaseURL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}/assets/gallery/`;

// ส่วนโหลดภาพศิลปิน
const artistSlider = document.getElementById('artistSlider');
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
  });

// ฟังก์ชันเลื่อน slider ศิลปิน
function scrollArtists(direction) {
  const scrollAmount = 320;
  if (direction === 'left') {
    artistSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    artistSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// ส่วนโหลดภาพ gallery
const galleryContainer = document.getElementById('galleryContainer');
fetch(`${galleryBaseURL}gallery.json`)
  .then(res => res.json())
  .then(data => {
    data.forEach((file, index) => {
      const img = document.createElement('img');
      img.src = `${galleryBaseURL}${file}`;
      img.alt = `Gallery ${index + 1}`;
      galleryContainer.appendChild(img);
    });
  });

// ส่วนแสดงปฏิทิน
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'th',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'เปิดงาน SuperToy SuperFood',
          start: '2025-06-15',
          end: '2025-06-17'
        },
        {
          title: 'Cosplay Parade',
          start: '2025-07-12T14:00:00',
          end: '2025-07-12T18:00:00'
        },
        {
          title: 'Workshop สร้าง Art Toy ของคุณเอง',
          start: '2025-07-20T10:00:00',
          end: '2025-07-20T15:00:00'
        }
      ]
    });
    calendar.render();
  }
});
