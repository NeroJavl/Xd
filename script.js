document.addEventListener('DOMContentLoaded', () => {
  const welcomeVideo = document.getElementById('welcome-video');
  const mainContent = document.getElementById('main-content');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  
  // Video end handler
  welcomeVideo.addEventListener('ended', () => {
    welcomeVideo.style.display = 'none';
    mainContent.classList.remove('hidden');
  });

  // Theme persistence across pages
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f0f0f0');
  }

  // Update navigation handler
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.textContent.trim();
      if (action === 'User') {
        window.location.href = 'servers.html';
      } else if (action === 'Reseñas') {
        window.location.href = 'config.html';
      } else if (action === 'About') {
        window.location.href = 'about.html';
      } else if (action === 'Actualizaciones') {
        window.location.href = 'updates.html';
      } else if (action === 'Info') {
        window.location.href = 'save.html';
      } else if (action === 'Precios') {
        window.location.href = 'about.html';
      } else if (action === 'Confi') {
        window.location.href = 'keygen.html';
      }
    });
  });

  // Initialize share buttons
  const shareButtons = document.querySelectorAll('.action-button');
  
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const action = btn.dataset.action;
      
      if (action === 'instagram') {
        window.open("https://instagram.com", "_blank");
      }
      else if (action === 'creditos') {
        window.location.href = 'share.html';
      }
      else if (action === 'github') {
        window.open("https://github.com", "_blank");
      }
      else if (action === 'chat') {
        window.location.href = 'chat.html';
      }
    });
  });

  // Initialize QR handler
  const qrButton = document.getElementById('share-qr');
  const shareBox = document.getElementById('share-box');
  
  if (qrButton && shareBox) {
    qrButton.addEventListener('click', () => {
      shareBox.classList.toggle('expanded');
    });
  }
});