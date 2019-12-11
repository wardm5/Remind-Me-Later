var x = document.getElementById("myAudio");
var sound;

chrome.runtime.getBackgroundPage(function (backgroundPage) {
    sound = backgroundPage.pD.sound;
    remind();
});

function remind() {
    if (sound) {
        playAudio();
    }
}

function playAudio() {
  x.play();
}
