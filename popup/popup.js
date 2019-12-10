// var inputHours = 0;
// var inputMinutes = 0;
// var inputSeconds = 0;
//
// var defaultHours = 0;
// var defaultMinutes = 0;
// var defaultSeconds = 5;
//
// var paused = false;
// var soundOn = false;

var data = {
    rH: 0,
    rM: 0,
    rS: 0,

    sH: 0,
    sM: 0,
    sS: 5,

    sound: false,
    paused: false
    // created: false
}

initializeClock();

function initializeClock() {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        if (backgroundPage.created) {
            var repeatButton = document.getElementById('soundToggle');
            repeatButton.checked = backgroundPage.pD.sound;
            backgroundPage.start();
        } else {
            setClock(0, 0, 0);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  var soundButton = document.getElementById('soundToggle');

  // var soundButton = document.getElementById('pauseTimer');
  soundButton.addEventListener('click', function() {
      // soundOn = repeatButton.checked;
      data.sound = soundButton.checked;

  }, false);

  // start timer button
  startTimerButton.addEventListener('click', function() {
      data.rS = data.sS;
      data.rM = data.sM;
      data.rH = data.sH;
      chrome.runtime.sendMessage({
          msg: "start",
          data: data
      });
  }, false);

  // end timer button
  pauseTimerButton.addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.pD.paused = true;
    });
  }, false);
}, false);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "updateTime") {
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

function sendData() {
    chrome.runtime.sendMessage({
        msg: "update",
        data: data
    });
}
