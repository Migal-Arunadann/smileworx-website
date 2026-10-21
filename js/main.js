/**
 * SMILEWORX DENTAL CARE — MASTER CLIENT JAVASCRIPT
 * Pure Vanilla JavaScript (Zero Dependencies, Zero Build Step)
 * Fully compatible with direct file:/// execution and static web hosting.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initBeforeAfterSlider();
  initCopyAddress();
});

/**
 * 1. Sticky Header scroll effects
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 2. Mobile Menu Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    
    // Switch between hamburger and close icons
    const iconOpen = toggleBtn.querySelector('.icon-menu');
    const iconClose = toggleBtn.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const iconOpen = toggleBtn.querySelector('.icon-menu');
      const iconClose = toggleBtn.querySelector('.icon-close');
      if (iconOpen && iconClose) {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    }
  });
}

/**
 * 3. Interactive Before & After Slider (Mouse, Touch, and Keyboard Accessible)
 */
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-slider');
  const handle = document.getElementById('before-after-handle');
  const afterClip = document.getElementById('after-clip');
  if (!container || !handle || !afterClip) return;

  let isDragging = false;
  let currentPercentage = 50;

  function updateSlider(percentage) {
    currentPercentage = Math.max(0, Math.min(100, percentage));
    handle.style.left = `${currentPercentage}%`;
    afterClip.style.clipPath = `polygon(${currentPercentage}% 0, 100% 0, 100% 100%, ${currentPercentage}% 100%)`;
    afterClip.style.webkitClipPath = `polygon(${currentPercentage}% 0, 100% 0, 100% 100%, ${currentPercentage}% 100%)`;
    container.setAttribute('aria-valuenow', Math.round(currentPercentage));
    container.setAttribute('aria-valuetext', `${Math.round(currentPercentage)}% after image revealed`);
  }

  function getPercentage(clientX) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    return (x / rect.width) * 100;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(getPercentage(e.clientX));
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(getPercentage(e.clientX));
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isDragging = true;
      updateSlider(getPercentage(e.touches[0].clientX));
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    updateSlider(getPercentage(e.touches[0].clientX));
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Keyboard navigation
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      updateSlider(currentPercentage - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      updateSlider(currentPercentage + 5);
    } else if (e.key === 'Home') {
      e.preventDefault();
      updateSlider(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      updateSlider(100);
    }
  });

  // Initialize at 50%
  updateSlider(50);
}

/**
 * 4. Copy Clinic Address to Clipboard
 */
function initCopyAddress() {
  const copyBtn = document.getElementById('copy-address-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const addressText = '#12/C, Valliammai Nagar Extn, Ponniammanmedu, Chennai - 600110, Tamil Nadu, India';
    navigator.clipboard.writeText(addressText).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span>✓ Copied to Clipboard</span>';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}
