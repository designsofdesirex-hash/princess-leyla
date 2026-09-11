/**
 * Princess Leyla — Variation 2 Core JavaScript
 * $90,000 Haute Minimalist Luxury Editorial Experience
 */
(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // UTILITIES
  // --------------------------------------------------------------------------
  const getEl = (sel, ctx = document) => ctx.querySelector(sel);
  const getEls = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const on = (el, type, handler, opts) => el && el.addEventListener(type, handler, opts);

  // --------------------------------------------------------------------------
  // 1. AGE GATE (18+ Strict Verification)
  // --------------------------------------------------------------------------
  const initAgeGate = () => {
    const gate = getEl('#age-gate');
    if (!gate) return;

    const TTL_DAYS = 30;
    const enterBtn = getEl('[data-age-enter]', gate);
    const exitBtn = getEl('[data-age-exit]', gate);
    const gatePanel = getEl('.age-gate__panel', gate);
    const gateImages = [
      'la_img_31.webp',
      'la_img_18.webp',
      'la_img_39.webp',
      'la_img_05.webp'
    ];
    let gateImageIndex = 0;
    const setGateImage = () => {
      if (!gatePanel) return;
      const file = gateImages[gateImageIndex];
      gatePanel.style.setProperty('--age-gate-image', `url("../img/${file}")`);
      gatePanel.style.backgroundImage = `linear-gradient(180deg, rgba(10, 10, 11, 0.12) 0%, rgba(10, 10, 11, 0.48) 40%, rgba(10, 10, 11, 0.92) 70%, rgba(10, 10, 11, 0.98) 100%), url("assets/img/${file}")`;
    };
    setGateImage();
    const gateImageTimer = window.setInterval(() => {
      gateImageIndex = (gateImageIndex + 1) % gateImages.length;
      setGateImage();
    }, 6000);

    const isVerified = () => {
      try {
        const stored = localStorage.getItem('la_age_verified_v2') || localStorage.getItem('dk_age_verified_v2');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Date.now() < parsed.expiry) return true;
          localStorage.removeItem('la_age_verified_v2');
          localStorage.removeItem('dk_age_verified_v2');
        }
      } catch (e) {}
      return document.cookie.indexOf('la_age_verified_v2=1') !== -1 || document.cookie.indexOf('dk_age_verified_v2=1') !== -1;
    };

    if (isVerified()) {
      document.documentElement.classList.add('age-verified');
      gate.hidden = true;
      window.clearInterval(gateImageTimer);
      return;
    }

    on(enterBtn, 'click', () => {
      const expiry = Date.now() + TTL_DAYS * 24 * 60 * 60 * 1000;
      try {
        localStorage.setItem('la_age_verified_v2', JSON.stringify({ verified: true, expiry }));
      } catch (e) {}
      document.cookie = `la_age_verified_v2=1; max-age=${TTL_DAYS * 86400}; path=/; SameSite=Lax`;
      document.documentElement.classList.add('age-verified');
      gate.hidden = true;
      window.clearInterval(gateImageTimer);
    });

    on(exitBtn, 'click', () => {
      window.clearInterval(gateImageTimer);
      window.location.href = 'https://www.google.com';
    });
  };

  // --------------------------------------------------------------------------
  // 2. NAVIGATION & SCROLLSPY
  // --------------------------------------------------------------------------
  const initNav = () => {
    const drawer = getEl('#nav-drawer');
    const openBtn = getEl('[data-nav-open]');
    const closeBtn = getEl('[data-nav-close]');
    const drawerLinks = getEls('.nav-drawer__nav a');
    const navLinks = getEls('.desktop-nav a');

    // Mobile drawer toggle
    const toggleDrawer = (open) => {
      if (open) {
        drawer?.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      } else {
        drawer?.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    };

    on(openBtn, 'click', () => toggleDrawer(true));
    on(closeBtn, 'click', () => toggleDrawer(false));
    drawerLinks.forEach((link) => on(link, 'click', () => toggleDrawer(false)));

    on(document, 'keydown', (e) => {
      if (e.key === 'Escape' && drawer?.classList.contains('is-open')) {
        toggleDrawer(false);
      }
    });

    // Scrollspy
    const sections = getEls('section[id]');
    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    };

    on(window, 'scroll', handleScrollSpy, { passive: true });
  };

  // --------------------------------------------------------------------------
  // 3. TOAST NOTIFICATION & ONE-CLICK CLIPBOARD COPIER
  // --------------------------------------------------------------------------
  let toastTimer;
  const showToast = (text) => {
    let toast = getEl('#toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-msg';
      toast.className = 'toast-msg';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  };

  const initTributeCopier = () => {
    const copyChips = getEls('[data-copy-tag]');
    copyChips.forEach((chip) => {
      on(chip, 'click', () => {
        const text = chip.dataset.copyTag;
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied ${text} — now send it`);
        }).catch(() => {
          showToast(`Handle: ${text}`);
        });
      });
    });
  };

  // --------------------------------------------------------------------------
  // 4. BOOKING SYSTEM & X (TWITTER) DM ROUTING
  // --------------------------------------------------------------------------
  const initBookingSystem = () => {
    const form = getEl('#booking-form');
    const successBanner = getEl('#booking-success');
    if (!form) return;

    on(form, 'submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      const name = getEl('#book-name', form)?.value?.trim() || 'Too shy to say';
      const contact = getEl('#book-contact', form)?.value?.trim() || 'Not supplied';
      const service = getEl('#book-service', form)?.value || 'Custom request';
      const budget = getEl('#book-budget', form)?.value || 'Ask me what you can afford';
      const platform = getEl('#book-platform', form)?.value || 'Tipfunder';
      const details = getEl('#book-details', form)?.value?.trim() || 'No details. Make me ask.';

      const isDe = localStorage.getItem('princess_leyla_lang') === 'de';
      const briefText = isDe ?
`👑 PRINCESS LEYLA — BUCHUNG & HINGABE-PROTOKOLL
========================================
• Ergebener Alias: ${name}
• Angegebener Benutzername: ${contact}
• Gewünschter Service: ${service}
• Ersttribut-Status: +30€ Erstgebühr beigefügt
• Budget-Rahmen: ${budget}
• Zahlungsplattform: ${platform}
• Beichte / Details: ${details}
----------------------------------------
* Bestätigt: Client bestätigt, dass der Ersttribut von +30€ dieser Buchung mit dem Benutzernamen beiliegt.` :
`👑 PRINCESS LEYLA — BOOKING & DEVOTION PROTOCOL
========================================
• Devotee Alias: ${name}
• Attached Username: ${contact}
• Requested Service: ${service}
• Initial Tribute Status: +30€ Speaking Fee Accompanied
• Budget Allocation: ${budget}
• Payment Platform: ${platform}
• Confession / Details: ${details}
----------------------------------------
* Verified: Client agrees that initial +30€ must accompany this booking with their attached username.`;

      btn.textContent = isDe ? 'Kopiere deine Beichte...' : 'Copying Your Confession...';
      btn.disabled = true;

      // Copy brief to clipboard
      navigator.clipboard.writeText(briefText).then(() => {
        showToast(isDe ? 'Hingabe-Bewerbung kopiert. Jetzt absenden.' : 'Devotion application copied. Now send it.');
      }).catch(() => {
        showToast(isDe ? 'Öffne X. Blamiere dich nicht.' : 'Opening X. Try not to embarrass yourself.');
      }).finally(() => {
        setTimeout(() => {
          if (successBanner) {
            successBanner.style.display = 'block';
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          btn.textContent = originalText;
          btn.disabled = false;
          // Open X profile / messages in new tab
          window.open('https://x.com/princessxtakes', '_blank', 'noopener,noreferrer');
        }, 600);
      });
    });
  };

  // --------------------------------------------------------------------------
  // 5. HERO CURATED IMAGE RANDOM SWITCHER (10s Intervals)
  // --------------------------------------------------------------------------
  const initHeroImageSwitcher = () => {
    const primaryImg = getEl('#heroPrimaryImg');
    const secondaryImg = getEl('#heroSecondaryImg');
    if (!primaryImg || !secondaryImg) return;

    // The curated images specified
    const images = [
      'assets/img/la_img_05.webp',
      'assets/img/la_img_29.webp',
      'assets/img/la_img_31.webp',
      'assets/img/la_img_39.webp',
      'assets/img/la_img_01.webp',
      'assets/img/la_img_03.webp',
      'assets/img/la_img_07.webp',
      'assets/img/la_img_10.webp',
      'assets/img/la_img_14.webp',
      'assets/img/la_img_21.webp',
      'assets/img/la_img_27.webp',
      'assets/img/la_img_37.webp'
    ];

    // Preload all 10 images into memory for instant, zero-flicker transitions
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let currentIndex = 0; // Starts at la_img_05.webp
    let isShowingPrimary = true;
    let timer = null;

    const getNextRandomIndex = () => {
      let nextIndex = currentIndex;
      while (nextIndex === currentIndex && images.length > 1) {
        nextIndex = Math.floor(Math.random() * images.length);
      }
      return nextIndex;
    };

    const switchImage = () => {
      if (document.hidden) return;

      const nextIndex = getNextRandomIndex();
      currentIndex = nextIndex;
      const nextSrc = images[nextIndex];

      const activeLayer = isShowingPrimary ? primaryImg : secondaryImg;
      const incomingLayer = isShowingPrimary ? secondaryImg : primaryImg;

      // Prepare incoming image
      incomingLayer.src = nextSrc;
      incomingLayer.classList.add('is-incoming');

      // Seamless crossfade transition
      requestAnimationFrame(() => {
        incomingLayer.classList.add('is-active');
        setTimeout(() => {
          activeLayer.classList.remove('is-active', 'is-incoming');
          incomingLayer.classList.remove('is-incoming');
          isShowingPrimary = !isShowingPrimary;
        }, 1400);
      });
    };

    // Run random switch every 10 seconds (10,000ms)
    timer = setInterval(switchImage, 10000);

    // Pause timer when tab is inactive, resume on active
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        clearInterval(timer);
        timer = setInterval(switchImage, 10000);
      }
    });
  };

  // --------------------------------------------------------------------------
  // 6. SCROLL REVEALS (IntersectionObserver gated behind .js class)
  // --------------------------------------------------------------------------
  const initScrollReveals = () => {
    const reveals = getEls('[data-reveal]');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach((el) => observer.observe(el));
  };

  // --------------------------------------------------------------------------
  // BOOTSTRAP
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    initNav();
    initScrollReveals();
    initTributeCopier();
    initBookingSystem();
    initHeroImageSwitcher();
  });
})();
