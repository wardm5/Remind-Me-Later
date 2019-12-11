var x = document.getElementById("myAudio");
var sound;

var reminderData = {
    reminderHours: 0,
    reminderMinutes: 0,
    remainderSeconds: 0,
    sound: false
}

chrome.runtime.getBackgroundPage(function (backgroundPage) {
    reminderData = backgroundPage.reminderData;
    remind();
});

function remind() {
    if (reminderData.sound) {
        playAudio();
    }
}

function playAudio() {
  x.play();
}
