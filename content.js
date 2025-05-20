let keywordList = [];

// Get stored keywords and run filtering
chrome.storage.local.get(['keywords'], (result) => {
  keywordList = result.keywords ? result.keywords.split(',').map(k => k.trim().toLowerCase()) : [];
  runYouTubeEnhancer();
});

function runYouTubeEnhancer() {
  blockShorts();
  blurNonMatchingVideos();
  disableSidebar();

  // Observe URL changes (SPA navigation)
  let lastURL = location.href;
  new MutationObserver(() => {
    const currentURL = location.href;
    if (currentURL !== lastURL) {
      lastURL = currentURL;
      if (currentURL.includes('/shorts')) {
        alert("Shorts are blocked.");
        window.location.href = 'https://www.youtube.com/';
      }
      blockShorts();
      blurNonMatchingVideos();
      disableSidebar();
    }
  }).observe(document.body, { childList: true, subtree: true });
}

// 🔒 Block all Shorts access
function blockShorts() {
  // Remove Shorts UI elements
  const shortsSelectors = [
    'a[href*="/shorts"]',
    'ytd-rich-grid-slim-media',
    'ytd-reel-shelf-renderer',
    'ytd-reel-item-renderer',
    'tp-yt-paper-item[title="Shorts"]',
    'ytd-guide-entry-renderer a[href*="/shorts"]'
  ];
  shortsSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Intercept clicks to Shorts
  document.addEventListener('click', (e) => {
    const path = e.composedPath();
    for (const el of path) {
      if (el.tagName === 'A' && el.href && el.href.includes('/shorts')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert("Shorts are blocked.");
        return false;
      }
    }
  }, true);

  // Redirect if already on Shorts page
  if (location.pathname.startsWith('/shorts')) {
    alert("Redirecting away from Shorts.");
    window.location.href = 'https://www.youtube.com/';
  }
}

// 👁️ Blur all videos not matching keywords
function blurNonMatchingVideos() {
  const videoSelectors = [
    'ytd-video-renderer',
    'ytd-grid-video-renderer',
    'ytd-rich-item-renderer'
  ];

  document.querySelectorAll(videoSelectors.join(',')).forEach(item => {
    const titleEl = item.querySelector('#video-title');
    if (titleEl) {
      const title = titleEl.textContent.toLowerCase();
      const match = keywordList.some(keyword => title.includes(keyword));
      if (!match) {
        item.style.filter = 'blur(6px)';
        item.style.pointerEvents = 'none';
      } else {
        item.style.filter = 'none';
        item.style.pointerEvents = 'auto';
      }
    }
  });
}

// 🚫 Disable sidebar buttons
function disableSidebar() {
  document.querySelectorAll('ytd-guide-entry-renderer a').forEach(link => {
    link.style.pointerEvents = 'none';
    link.style.opacity = '0.4';
  });
}
