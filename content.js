setInterval(() => {
  const adElement1 = document.querySelector('.ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded');
  const adElement2 = document.querySelector('.ytp-ad-text');
  
  if (adElement1 || adElement2) {
    const videos = document.querySelectorAll('video');
    for(let i=0; i<videos.length; i++) {
      if (videos[i].currentTime < videos[i].duration) {
        videos[i].currentTime = videos[i].duration;
      }
    }
  }
}, 1000);
