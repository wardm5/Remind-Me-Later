var x = document.getElementById("myAudio");
var sound;
var timer;

var reminderData = {
    reminderHours: 0,
    reminderMinutes: 0,
    remainderSeconds: 0,
    sound: false
}

function start() {
    myClock();   // shows clock
    clearInterval(timer);  // clears last timer
    timer = setInterval(myClock, 1000);  // sets new timer
    created = true;
}

function myClock() {
    if (reminderData.reminderHours <= 0 && reminderData.reminderMinutes <= 0 && reminderData.remainderSeconds <= -1) {
      clearInterval(timer);
    } else {
      setClock(reminderData.reminderHours, reminderData.reminderMinutes, reminderData.remainderSeconds);
      clockCalculateNextValues();
    }

}

function clockCalculateNextValues() {
    if (reminderData.reminderMinutes <= 0 && reminderData.reminderHours >= 1 && reminderData.remainderSeconds <= 0) {
        reminderData.reminderMinutes = 60;
        reminderData.reminderHours--;
    }
    if (reminderData.remainderSeconds <= 0 && reminderData.reminderMinutes >= 1) {
        reminderData.remainderSeconds = 60;
        reminderData.reminderMinutes--;
    }
    reminderData.remainderSeconds--;
}

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
    start();
});


function playAudio() {
  x.play();
}
