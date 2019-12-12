var x = document.getElementById("myAudio");
var sound;

function myFunction() {
    // alert("Page is loaded");
    var query = location.search.substring(1);
    var parameters = {};
    var keyValues = query.split(/&/);
    for (var keyValue in keyValues) {
        var keyValuePairs = keyValue.split(/=/);
        var key = keyValuePairs[0];
        var value = keyValuePairs[1];
        parameters[key] = value;
    }
    setClock(parameters.hours, parameters.minutes, parameters.seconds);
}

// update clock time
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "reminderTime") {
            setClock(request.data.rH, request.data.rM, request.data.rS);
        }
    }
);

function setClock(hours, minutes, seconds) {
    var clock = document.getElementById('clockdiv');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    hoursSpan.innerHTML = ('0' + hours).slice(-2);
    minutesSpan.innerHTML = ('0' + minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + seconds).slice(-2);
}

chrome.runtime.getBackgroundPage(function (backgroundPage) {
    reminderData = backgroundPage.reminderData;
    if (reminderData.sound) {
        playAudio();
    }
});

function playAudio() {
  x.play();
}
