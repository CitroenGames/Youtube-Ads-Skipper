setInterval(() => {
  const adElement = document.querySelector('.ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded');
  if (adElement) {
    const videos = document.querySelectorAll('video');
    for(let i=0; i<videos.length; i++) {
      if (videos[i].currentTime < videos[i].duration) {
        videos[i].currentTime = videos[i].duration;
      }
    }
  }
}, 1000);
