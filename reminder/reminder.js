var x = document.getElementById("myAudio");
var soundOn;

chrome.runtime.getBackgroundPage(function (backgroundPage) {
    soundOn = backgroundPage.soundOn;
    remind();
});

function remind() {
    if (soundOn) {
        playAudio();
    }
}

function playAudio() {
  x.play();
}
