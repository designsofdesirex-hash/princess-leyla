/**
 * Princess Leyla — Bilingual Translation Engine (EN / DE)
 * English is default. Persists to localStorage.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'princess_leyla_lang';

  const TRANSLATIONS = {
    en: {
      langCode: 'en',
      // Age Gate
      ageGateTitle: 'Before you kneel',
      ageGateDesc: 'This is an adult space. You must be 18 or older to enter Princess Leyla’s world.',
      ageGateConsent: '🛡️ Essential Cookies & 18+ Verification Only · Zero Ad Tracking',
      ageGateEnter: 'I Am 18+ & Accept — Let Me In',
      ageGateExit: 'I Am Under 18 — Exit',
      ageGateMeta: 'Strictly 18+ · <a href="content-notice.html">Content Notice</a>, <a href="cookies.html">Cookie Policy</a> &amp; <a href="terms.html">Rules</a>',
      
      // Header & Nav
      navRules: 'My Rules',
      navArchive: 'The Archive',
      navTribute: 'Tribute',
      navX: 'Find Me on X',
      headerCta: 'Beg for Attention',
      drawerBoss: 'The Boss',
      drawerRules: 'My Rules',
      drawerArchive: 'The Archive',
      drawerPay: 'Pay Me',
      drawerRequest: 'Make a Request',
      drawerImpress: 'Try to Impress Me',

      // Hero
      heroTitle: 'Your Eternal <em>Addiction.</em>',
      heroDesc: 'Professional finprincess &amp; certified simp collector.',
      heroCustom: 'Ask for a Custom',
      heroSend: 'Send My Money',
      heroRole: 'Professional finprincess &amp; certified simp collector',

      // Motto
      motto1: 'I had no use for your desperate devotion.',
      motto2: 'So I chose to <em>monetise</em> it.',
      motto3: 'Now, you pay for the privilege of my attention.',

      // Lookbook / Archive
      archiveEyebrow: 'Your favorite bad decision',
      archiveTitle: 'Keep Adoring',
      archiveSubtitle: 'Private archive. Absolute obsession.',
      feedObsession: 'Feed the obsession',
      humiliationSpecialist: 'Humiliation specialist',
      archiveNoteText: 'I’ll make you eat your own load.',
      archiveNoteLink: 'Go pay me',

      // Links Section
      linksEyebrow: 'Official Channels',
      linksTitle: 'Direct Tribute &amp; Portals',
      linksSubtitle: 'All interaction requires submission. When sending a tribute or booking, attach your username so Princess Leyla acknowledges you.',
      linksCommandLabel: 'No free attention',
      linksCommandTitle: 'Choose your <em>payment.</em>',
      linksCommandDesc: 'Initial +30€ required to speak. Send tribute with your username attached.',
      linksCommandBtn: 'Direct Tribute (Tipfunder)',
      tributeInfoLabel: 'Direct tribute info',
      tributeInfoH3: 'Make yourself useful.',
      tributeInfoP: 'Attach your username with payment so Princess Leyla acknowledges you.',
      tributeInfoBadge: 'Attach Username',

      // Session Banner
      sessionLabel: 'Financial dominatrix',
      sessionH2: 'Send me<br><em>my money.</em>',
      sessionBtn: 'Make a tribute',

      // Booking Section
      bookingEyebrow: 'Direct Protocol',
      bookingTitle: 'Initial +30€ to Speak',
      bookingDesc: '<strong>Mandatory Directive:</strong> For booking or speaking with Princess Leyla, an initial <strong>+30€ tribute must accompany your request</strong>. She explicitly requires you to <strong>attach your username</strong> (Telegram or X) through one of the listed tribute methods (Revolut, Tipfunder, Throne) so your inquiry can be identified and answered.',
      bookingCardLabel: 'Devotion Application',
      bookingCardTitle: 'Try to impress me.',
      bookingCardDesc: 'Initial +30€ speaking tribute must be sent with your username attached before conversation begins.',
      bookingCardBadge: '+30€ required',
      bookingSuccessH3: 'Good. Now send it.',
      bookingSuccessP: 'Your request is copied. Send it to Princess Leyla with your initial +30€ tribute and attached username. Unpaid requests are discarded immediately.',
      
      // Form Fields
      dividerWho: 'Who are you?',
      labelName: 'Name / pathetic little alias <span>(optional)</span>',
      placeholderName: 'e.g. needy beta',
      labelContact: 'Telegram / X handle / email <span>(optional)</span>',
      placeholderContact: 'e.g. @yourhandle',
      dividerWhat: 'What do you want?',
      labelService: 'What are you begging for? <span>(optional)</span>',
      servicePlaceholder: 'Pick your service...',
      serviceOption1: 'Initial Consultation & Discussion (+30€ to speak)',
      serviceOption2: 'Custom Humiliation Video',
      serviceOption3: 'Exclusive Archive Photo Set',
      serviceOption4: 'Worn Item / Sock Tribute',
      serviceOption5: 'Ongoing Simp Management',
      serviceOption6: 'Special Custom Request',
      labelBudget: 'What can you afford? <span>(optional)</span>',
      budgetPlaceholder: 'Confirm tribute budget...',
      budgetOption1: '€30 (Initial consultation fee to speak)',
      labelPlatform: 'Where will you send it? <span>(optional)</span>',
      labelDetails: 'Give me the details <span>(optional)</span>',
      placeholderDetails: 'Tell me how you want to be humiliated, what you want to see, and how much you’re sending...',
      checkboxTerms: 'I confirm I am 18+, agree to the terms, and understand the initial +30€ tribute must accompany this booking with my username attached. <strong>(required)</strong>',
      dividerUseful: 'Prove you’re useful',
      btnSubmit: 'Submit Request &amp; Send to Princess Leyla',
      btnTelegram: 'Message Telegram ↗',
      btnX: 'Message on X ↗',

      // Footer
      footerMotto: 'Professional finprincess &amp; certified simp collector',
      footer18Notice: '18+ Content Notice',
      footerTerms: 'Terms &amp; Policies',
      footerPrivacy: 'Privacy',
      footerCookies: 'Cookies',
      footerCopyright: '&copy; 2024–2026 Princess Leyla. All Rights Reserved. Strictly 18+ Adult Entertainment.'
    },
    de: {
      langCode: 'de',
      // Age Gate
      ageGateTitle: 'Bevor du kniest',
      ageGateDesc: 'Dies ist ein Bereich für Erwachsene. Du musst mindestens 18 Jahre alt sein, um die Welt von Princess Leyla zu betreten.',
      ageGateConsent: '🛡️ Nur essenzielle Cookies & Speicherung · Keine Werbetracker',
      ageGateEnter: 'Ich bin 18+ & Akzeptiere — Eintreten',
      ageGateExit: 'Ich bin unter 18 — Verlassen',
      ageGateMeta: 'Streng ab 18 · <a href="content-notice.html">Inhaltshinweis</a>, <a href="cookies.html">Cookie-Richtlinie</a> &amp; <a href="terms.html">Regeln</a>',
      
      // Header & Nav
      navRules: 'Meine Regeln',
      navArchive: 'Das Archiv',
      navTribute: 'Tribut',
      navX: 'Auf X finden',
      headerCta: 'Bettle um Aufmerksamkeit',
      drawerBoss: 'Die Herrin',
      drawerRules: 'Meine Regeln',
      drawerArchive: 'Das Archiv',
      drawerPay: 'Bezahl mich',
      drawerRequest: 'Anfrage stellen',
      drawerImpress: 'Versuch mich zu beeindrucken',

      // Hero
      heroTitle: 'Deine ewige <em>Sucht.</em>',
      heroDesc: 'Professionelle Finprincess &amp; zertifizierte Simp-Kollektorin.',
      heroCustom: 'Custom anfragen',
      heroSend: 'Mein Geld senden',
      heroRole: 'Professionelle Finprincess &amp; zertifizierte Simp-Kollektorin',

      // Motto
      motto1: 'Ich hatte keine Verwendung für deine verzweifelte Hingabe.',
      motto2: 'Also habe ich beschlossen, sie zu <em>monetarisieren</em>.',
      motto3: 'Jetzt bezahlst du für das Privileg meiner Aufmerksamkeit.',

      // Lookbook / Archive
      archiveEyebrow: 'Deine liebste Fehlentscheidung',
      archiveTitle: 'Bete mich weiter an',
      archiveSubtitle: 'Privates Archiv. Absolute Obsession.',
      feedObsession: 'Füttere die Obsession',
      humiliationSpecialist: 'Spezialistin für Erniedrigung',
      archiveNoteText: 'Ich lasse dich deine eigene Last schlucken.',
      archiveNoteLink: 'Geh und bezahl mich',

      // Links Section
      linksEyebrow: 'Offizielle Kanäle',
      linksTitle: 'Direkter Tribut &amp; Portale',
      linksSubtitle: 'Jede Interaktion erfordert Unterwerfung. Wenn du einen Tribut sendest oder buchst, gib deinen Benutzernamen an, damit Princess Leyla dich wahrnimmt.',
      linksCommandLabel: 'Keine kostenlose Aufmerksamkeit',
      linksCommandTitle: 'Wähle deine <em>Zahlung.</em>',
      linksCommandDesc: 'Ersttribut +30€ zum Sprechen erforderlich. Sende den Tribut mit angegebenem Benutzernamen.',
      linksCommandBtn: 'Direkter Tribut (Tipfunder)',
      tributeInfoLabel: 'Direkte Tribut-Information',
      tributeInfoH3: 'Mach dich nützlich.',
      tributeInfoP: 'Gib deinen Benutzernamen bei der Zahlung an, damit Princess Leyla dich wahrnimmt.',
      tributeInfoBadge: 'Benutzername angeben',

      // Session Banner
      sessionLabel: 'Geldherrin &amp; Domina',
      sessionH2: 'Schick mir<br><em>mein Geld.</em>',
      sessionBtn: 'Tribut senden',

      // Booking Section
      bookingEyebrow: 'Verbindliches Protokoll',
      bookingTitle: 'Ersttribut +30€ zum Sprechen',
      bookingDesc: '<strong>Verbindliche Richtlinie:</strong> Für Buchungen oder Gespräche mit Princess Leyla muss deiner Anfrage ein Ersttribut von mindestens <strong>+30€ beiliegen</strong>. Sie verlangt ausdrücklich die Angabe deines <strong>Benutzernamens</strong> (Telegram oder X) über eine der gelisteten Zahlungsmethoden (Revolut, Tipfunder, Throne), damit deine Anfrage zugeordnet und beantwortet werden kann.',
      bookingCardLabel: 'Hingabe-Bewerbung',
      bookingCardTitle: 'Versuch mich zu beeindrucken.',
      bookingCardDesc: 'Der Ersttribut von +30€ muss zusammen mit deinem Benutzernamen gesendet werden, bevor ein Gespräch beginnt.',
      bookingCardBadge: '+30€ erforderlich',
      bookingSuccessH3: 'Sehr gut. Jetzt sende es ab.',
      bookingSuccessP: 'Deine Anfrage wurde kopiert. Sende sie an Princess Leyla mit deinem Ersttribut von +30€ und angegebenem Benutzernamen. Unbezahlte Anfragen werden sofort gelöscht.',
      
      // Form Fields
      dividerWho: 'Wer bist du?',
      labelName: 'Name / erbärmlicher kleiner Alias <span>(optional)</span>',
      placeholderName: 'z.B. bedürftiger Beta',
      labelContact: 'Telegram / X-Handle / E-Mail <span>(optional)</span>',
      placeholderContact: 'z.B. @deinhandle',
      dividerWhat: 'Was willst du?',
      labelService: 'Worum bettelst du? <span>(optional)</span>',
      servicePlaceholder: 'Wähle deinen Service...',
      serviceOption1: 'Erstgespräch & Beratung (+30€ zum Sprechen)',
      serviceOption2: 'Individuelles Erniedrigungsvideo',
      serviceOption3: 'Exklusives Archiv-Fotoset',
      serviceOption4: 'Getragene Sachen / Socken-Tribut',
      serviceOption5: 'Dauerhafte Simp-Verwaltung',
      serviceOption6: 'Besondere Sonderanfrage',
      labelBudget: 'Was kannst du dir leisten? <span>(optional)</span>',
      budgetPlaceholder: 'Tribut-Budget bestätigen...',
      budgetOption1: '30€ (Erstgebühr zum Sprechen)',
      labelPlatform: 'Worüber sendest du es? <span>(optional)</span>',
      labelDetails: 'Gib mir die Details <span>(optional)</span>',
      placeholderDetails: 'Sag mir, wie du erniedrigt werden willst, was du sehen möchtest und wie viel du sendest...',
      checkboxTerms: 'Ich bestätige, dass ich 18+ bin, den Bedingungen zustimme und verstehe, dass der Ersttribut von +30€ dieser Buchung mit meinem Benutzernamen beiliegen muss. <strong>(erforderlich)</strong>',
      dividerUseful: 'Beweise deinen Nutzen',
      btnSubmit: 'Anfrage absenden &amp; an Princess Leyla übermitteln',
      btnTelegram: 'Telegram Nachricht ↗',
      btnX: 'Nachricht auf X ↗',

      // Footer
      footerMotto: 'Professionelle Finprincess &amp; zertifizierte Simp-Kollektorin',
      footer18Notice: '18+ Inhaltshinweis',
      footerTerms: 'Bedingungen &amp; Richtlinien',
      footerPrivacy: 'Datenschutz',
      footerCookies: 'Cookies',
      footerCopyright: '&copy; 2024–2026 Princess Leyla. Alle Rechte vorbehalten. Streng ab 18 Jahren.'
    }
  };

  function getCurrentLanguage() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    const t = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update switcher buttons UI
    document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Helper safely update text/HTML
    const setHtml = (selector, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.innerHTML = val;
    };
    const setText = (selector, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.textContent = val;
    };
    const setAttr = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.setAttribute(attr, val);
    };

    // Age Gate
    setText('#age-gate-title', t.ageGateTitle);
    setHtml('.age-gate__desc', t.ageGateDesc);
    const consentEl = document.querySelector('.consent-pill');
    if (consentEl && t.ageGateConsent) consentEl.textContent = t.ageGateConsent;
    setText('.age-gate__btn-enter', t.ageGateEnter);
    setText('.age-gate__btn-exit', t.ageGateExit);
    setHtml('.age-gate__meta', t.ageGateMeta);

    // Header & Navigation
    const navItems = document.querySelectorAll('.desktop-nav__list .nav-link');
    if (navItems.length >= 4) {
      navItems[0].textContent = t.navRules;
      navItems[1].textContent = t.navArchive;
      navItems[2].textContent = t.navTribute;
      const xSpan = navItems[3].querySelector('span');
      if (xSpan) xSpan.textContent = t.navX;
    }
    const headerCta = document.querySelector('.header-cta span');
    if (headerCta) headerCta.textContent = t.headerCta;

    // Mobile Drawer
    const drawerLinks = document.querySelectorAll('.nav-drawer__nav a');
    if (drawerLinks.length >= 5) {
      drawerLinks[0].textContent = t.drawerBoss;
      drawerLinks[1].textContent = t.drawerRules;
      drawerLinks[2].textContent = t.drawerArchive;
      drawerLinks[3].textContent = t.drawerPay;
      drawerLinks[4].textContent = t.drawerRequest;
    }
    const drawerImpress = document.querySelector('.nav-drawer__panel .btn-block');
    if (drawerImpress) drawerImpress.textContent = t.drawerImpress;

    // Hero Section
    setHtml('.hero__title', t.heroTitle);
    setHtml('.hero__desc', t.heroDesc);
    const heroCustomBtn = document.querySelector('.hero__actions .btn-primary');
    if (heroCustomBtn) heroCustomBtn.textContent = t.heroCustom;
    const heroSendBtn = document.querySelector('.hero__actions .btn-secondary');
    if (heroSendBtn) heroSendBtn.textContent = t.heroSend;
    setHtml('.hero__media-caption-sub', t.heroRole);

    // Motto Section
    setHtml('.motto-line--1', t.motto1);
    setHtml('.motto-line--2', t.motto2);
    setHtml('.motto-line--3', t.motto3);

    // Lookbook / Archive Section
    setText('.lookbook-intro .text-eyebrow', t.archiveEyebrow);
    setText('.lookbook-intro .text-editorial-title', t.archiveTitle);
    setText('.lookbook-intro .text-body-muted', t.archiveSubtitle);
    setText('.lookbook-banner__copy .lookbook-banner__label', t.humiliationSpecialist);
    const bannerLink = document.querySelector('.lookbook-banner__copy .banner-link');
    if (bannerLink) bannerLink.innerHTML = `${t.feedObsession} <span aria-hidden="true">↗</span>`;
    setText('.archive-note p', t.archiveNoteText);
    const archiveNoteLink = document.querySelector('.archive-note .text-link');
    if (archiveNoteLink) archiveNoteLink.innerHTML = `${t.archiveNoteLink} <span aria-hidden="true">→</span>`;

    // Links Section
    setText('#links .section-header .text-eyebrow', t.linksEyebrow);
    setHtml('#links .section-header .text-editorial-title', t.linksTitle);
    setText('#links .section-header .text-body-muted', t.linksSubtitle);
    setText('.links-command__label', t.linksCommandLabel);
    setHtml('.links-command h3', t.linksCommandTitle);
    setText('.links-command p', t.linksCommandDesc);
    const linksCommandBtn = document.querySelector('.links-command .btn-light');
    if (linksCommandBtn) linksCommandBtn.innerHTML = `${t.linksCommandBtn} <span aria-hidden="true">↗</span>`;
    setText('.tribute-box__label', t.tributeInfoLabel);
    setText('.tribute-box__header h3', t.tributeInfoH3);
    setText('.tribute-box__header p', t.tributeInfoP);
    setText('.tribute-box__badge', t.tributeInfoBadge);

    // Session Banner
    setText('.session-banner .lookbook-banner__label', t.sessionLabel);
    setHtml('.session-banner h2', t.sessionH2);
    const sessionBtn = document.querySelector('.session-banner .btn-light');
    if (sessionBtn) sessionBtn.innerHTML = `${t.sessionBtn} <span aria-hidden="true">↗</span>`;

    // Booking Section
    setText('#book .section-header .text-eyebrow', t.bookingEyebrow);
    setHtml('#book .section-header .text-editorial-title', t.bookingTitle);
    setHtml('#book .section-header .text-body-muted', t.bookingDesc);
    setText('.booking-card__label', t.bookingCardLabel);
    setText('.booking-card__masthead h3', t.bookingCardTitle);
    setText('.booking-card__masthead p', t.bookingCardDesc);
    setText('.booking-card__badge', t.bookingCardBadge);
    setText('#booking-success h3', t.bookingSuccessH3);
    setText('#booking-success p', t.bookingSuccessP);

    // Booking Form
    const dividers = document.querySelectorAll('.booking-form .form-divider span');
    if (dividers.length >= 3) {
      dividers[0].textContent = t.dividerWho;
      dividers[1].textContent = t.dividerWhat;
      dividers[2].textContent = t.dividerUseful;
    }
    setHtml('label[for="book-name"]', t.labelName);
    setAttr('#book-name', 'placeholder', t.placeholderName);
    setHtml('label[for="book-contact"]', t.labelContact);
    setAttr('#book-contact', 'placeholder', t.placeholderContact);
    setHtml('label[for="book-service"]', t.labelService);
    setHtml('label[for="book-budget"]', t.labelBudget);
    setHtml('label[for="book-platform"]', t.labelPlatform);
    setHtml('label[for="book-details"]', t.labelDetails);
    setAttr('#book-details', 'placeholder', t.placeholderDetails);
    setHtml('.form-check-label span', t.checkboxTerms);

    // Form Select Options
    const serviceSelect = document.getElementById('book-service');
    if (serviceSelect && serviceSelect.options.length >= 7) {
      serviceSelect.options[0].text = t.servicePlaceholder;
      serviceSelect.options[1].text = t.serviceOption1;
      serviceSelect.options[2].text = t.serviceOption2;
      serviceSelect.options[3].text = t.serviceOption3;
      serviceSelect.options[4].text = t.serviceOption4;
      serviceSelect.options[5].text = t.serviceOption5;
      serviceSelect.options[6].text = t.serviceOption6;
    }
    const budgetSelect = document.getElementById('book-budget');
    if (budgetSelect && budgetSelect.options.length >= 7) {
      budgetSelect.options[0].text = t.budgetPlaceholder;
      budgetSelect.options[1].text = t.budgetOption1;
    }

    // Submit Action Buttons
    setHtml('.form-actions button[type="submit"]', t.btnSubmit);
    const formLinks = document.querySelectorAll('.form-actions a');
    if (formLinks.length >= 2) {
      formLinks[0].textContent = t.btnTelegram;
      formLinks[1].textContent = t.btnX;
    }

    // Footer
    setHtml('.footer-motto', t.footerMotto);
    const footerLinks = document.querySelectorAll('.footer-links-row:first-of-type a');
    if (footerLinks.length >= 6) {
      footerLinks[0].textContent = t.drawerBoss;
      footerLinks[1].textContent = t.drawerRules;
      footerLinks[2].textContent = t.drawerArchive;
      footerLinks[3].textContent = t.drawerPay;
      footerLinks[4].textContent = t.drawerRequest;
      footerLinks[5].textContent = `${t.navX} ↗`;
    }
    const legalFooterLinks = document.querySelectorAll('.footer-links-row:last-of-type a');
    if (legalFooterLinks.length >= 4) {
      legalFooterLinks[0].textContent = t.footer18Notice;
      legalFooterLinks[1].textContent = t.footerTerms;
      legalFooterLinks[2].textContent = t.footerPrivacy;
      legalFooterLinks[3].textContent = t.footerCookies;
    }
    setHtml('.footer-bottom div', t.footerCopyright);

    // Dispatch global event for other scripts (e.g. dynamic clipboard generator)
    window.dispatchEvent(new CustomEvent('leylaLanguageChanged', { detail: { lang } }));
  }

  // Inject language switcher HTML into containers
  function setupLanguageSwitcher() {
    const headerRight = document.querySelector('.site-header__right');
    const drawerPanel = document.querySelector('.nav-drawer__top');

    const createSwitcherElement = () => {
      const div = document.createElement('div');
      div.className = 'lang-switcher';
      div.setAttribute('role', 'group');
      div.setAttribute('aria-label', 'Language Switcher');
      div.innerHTML = `
        <button type="button" class="lang-btn" data-lang="en" aria-label="English">EN</button>
        <span class="lang-sep" aria-hidden="true">/</span>
        <button type="button" class="lang-btn" data-lang="de" aria-label="Deutsch">DE</button>
      `;
      div.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetLang = btn.getAttribute('data-lang');
          applyLanguage(targetLang);
        });
      });
      return div;
    };

    if (headerRight && !document.querySelector('.site-header__right .lang-switcher')) {
      const switcher = createSwitcherElement();
      const cta = headerRight.querySelector('.header-cta');
      if (cta) {
        headerRight.insertBefore(switcher, cta);
      } else {
        headerRight.appendChild(switcher);
      }
    }

    if (drawerPanel && !document.querySelector('.nav-drawer__top .lang-switcher')) {
      const drawerSwitcher = createSwitcherElement();
      drawerPanel.appendChild(drawerSwitcher);
    }
  }

  // Run as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLanguageSwitcher();
      applyLanguage(getCurrentLanguage());
    });
  } else {
    setupLanguageSwitcher();
    applyLanguage(getCurrentLanguage());
  }

  // Export to window
  window.PrincessLeylai18n = {
    applyLanguage,
    getCurrentLanguage,
    translations: TRANSLATIONS
  };
})();
