<<<<<<< HEAD
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
=======
function getVisibleElement(selector) {
>>>>>>> main
    const elements = document.querySelectorAll(selector);
    return [...elements].find(element => element.offsetWidth && element.offsetHeight);
}

<<<<<<< HEAD
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
=======
const options = { childList: true, subtree: true };

let VIDEO;
>>>>>>> main

function getAd() {
    return getVisibleElement(".ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
}

function skipAd() {
    if (!getAd()) {
        return;
    }

    VIDEO.currentTime = VIDEO.duration;
}

function prepareToSkipAd() {
    new MutationObserver((_, observer) => {
        const elVideo = getVisibleElement("video");
        if (!elVideo) {
            return;
        }

        observer.disconnect();

        VIDEO = elVideo;
        VIDEO.removeEventListener("canplay", skipAd);
        VIDEO.addEventListener("canplay", skipAd);
    }).observe(document, options);
}

new MutationObserver(prepareToSkipAd).observe(document.querySelector("title"), options);

prepareToSkipAd();