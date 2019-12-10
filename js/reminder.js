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

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.msg === "sound") {
//             // if (request.data.soundOn == true) {
//             //     playAudio();
//             // }
//             soundOn = request.data.soundOn;
//             remind();
//         }
//     }
// );
//
// remind();

// x.play();
// playAudio();
function playAudio() {
  x.play();
}
