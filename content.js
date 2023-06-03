function getVisibleElement(selector) {
    const elements = document.querySelectorAll(selector);
    return [...elements].find(element => element.offsetWidth && element.offsetHeight);
}

const options = { childList: true, subtree: true };

let VIDEO;

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