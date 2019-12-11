var data = {
    rH: 0,
    rM: 0,
    rS: 0,

    sH: 0,
    sM: 0,
    sS: 5,

    aH: 0,
    aM: 0,
    aS: 20,

    sound: false,
    paused: false
}
var created = false;

initializeClock();
function initializeClock() {
    if (created) {
        chrome.runtime.getBackgroundPage(function (backgroundPage) {
            data = backgroundPage.pD;
            setClock(data.rH, data.rM, data.rS);
        });
    } else {
        setClock(0, 0, 0);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  var soundButton = document.getElementById('soundToggle');

  // toggle sound button event
  soundButton.addEventListener('click', function() {
      data.sound = soundButton.checked;
      chrome.runtime.getBackgroundPage(function (backgroundPage) {
          backgroundPage.pD.sound = data.sound;
      });
  }, false);

  // start timer button event
  startTimerButton.addEventListener('click', function() {
      data.rS = data.sS;
      data.rM = data.sM;
      data.rH = data.sH;
      chrome.runtime.sendMessage({
          msg: "start",
          data: data
      });
  }, false);

  // end timer button event
  pauseTimerButton.addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.pD.paused = !backgroundPage.pD.paused;
        backgroundPage.myClock();
    });
  }, false);
}, false);

// update clock time
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
