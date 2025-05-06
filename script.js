// ========================
// ARTIST SLIDER SECTION
// ========================
const artistSlider = document.getElementById('artistSlider');

// ตัวอย่างข้อมูลศิลปิน (สามารถเพิ่มได้ตามต้องการ)
const artists = [
  {
    name: 'Alex Face',
    image: 'https://images.unsplash.com/photo-1589558929234-8460e1a11f66?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Phannapast',
    image: 'https://images.unsplash.com/photo-1608531079785-3b8b9bd4d61b?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Suntur',
    image: 'https://images.unsplash.com/photo-1557844352-761f2565b6d6?auto=format&fit=crop&w=800&q=80'
  }
];

// เพิ่ม card ศิลปินลงใน slider
artists.forEach(artist => {
  const card = document.createElement('div');
  card.classList.add('artist-card');
  card.innerHTML = `
    <img src="${artist.image}" alt="${artist.name}">
    <h3>${artist.name}</h3>
  `;
  artistSlider.appendChild(card);
});

// ฟังก์ชันเลื่อน slider
function scrollArtists(direction) {
  const scrollAmount = 320; // ปรับขนาดได้ตามต้องการ
  if (direction === 'left') {
    artistSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    artistSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}


// ========================
// FULLCALENDAR SECTION
// ========================
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

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
        end: '2025-06-17',
        description: 'พบกับศิลปินกว่า 20 ราย และเมนูอาหารแฟนตาซีพิเศษ!'
      },
      {
        title: 'Cosplay Parade',
        start: '2025-07-12T14:00:00',
        end: '2025-07-12T18:00:00',
        description: 'พาเหรดตัวละคร Art Toy และ Cosplay สุดอลังการ!'
      },
      {
        title: 'Workshop สร้าง Art Toy ของคุณเอง',
        start: '2025-07-20T10:00:00',
        end: '2025-07-20T15:00:00',
        description: 'เรียนทำ Art Toy พร้อมวัสดุครบชุด สำหรับเยาวชนและบุคคลทั่วไป'
      }
    ]
  });

  calendar.render();
});


// ========================
// GALLERY SECTION
// ========================
const galleryImages = document.getElementById('galleryImages');

// ตัวอย่างรูปภาพแกลเลอรี่
const galleryList = [
  'https://images.unsplash.com/photo-1589558929234-8460e1a11f66',
  'https://images.unsplash.com/photo-1608531079785-3b8b9bd4d61b',
  'https://images.unsplash.com/photo-1557844352-761f2565b6d6'
];

galleryList.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Gallery Image';
  galleryImages.appendChild(img);
});
