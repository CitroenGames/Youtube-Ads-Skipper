<<<<<<< Updated upstream
const observer = new MutationObserver((mutationsList, observer) => {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const adElement1 = document.querySelector('.ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded');
      const adElement2 = document.querySelector('.ytp-ad-text');

      if (adElement1 || adElement2) {
        const videos = document.querySelectorAll('video');
        for(let i=0; i<videos.length; i++) {
          if (videos[i].currentTime < videos[i].duration) {
            videos[i].currentTime = videos[i].duration;
          }
=======
const options = { childList: true, subtree: true };
let VIDEO;

function getVisibleElement(selector) {
<<<<<<< Updated upstream
        const elements = document.querySelectorAll(selector);
        return [...elements].find(element => element.offsetWidth && element.offsetHeight);
    }

    const options = { childList: true, subtree: true };

    let VIDEO;
=======
    const elements = document.querySelectorAll(selector);
    return [...elements].find(element => element.offsetWidth && element.offsetHeight);
}

function getAd() {
    return getVisibleElement(".ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
}
>>>>>>> Stashed changes

    function getAd() {
        return getVisibleElement(".ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
    }

    function skipAd() {
        if (!getAd()) {
            return;
>>>>>>> Stashed changes
        }
      }

      const skipAdButton = document.querySelector('.ytp-ad-skip-button.ytp-button');
      if (skipAdButton) {
        skipAdButton.click();
      }
    }
  }
});

observer.observe(document, { attributes: false, childList: true, subtree: true });
