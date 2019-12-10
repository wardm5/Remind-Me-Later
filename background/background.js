var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;
var created = false;
var repeat = false;
var paused = false;

var soundOn = false;

var data = {
    remainingHours: 0,
    remainingMinutes: 0,
    remainingSeconds: 0,

    setHours: 0,
    setMinutes: 0,
    setSeconds: 0,

    sound: false,
    paused: false,
    created: false
}

function start() {
    myClock();   // shows clock
    clearInterval(timer);  // clears last timer
    timer = setInterval(myClock, 1000);  // sets new timer
    created = true;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "start") {

            hours = request.data.hours;
            minutes = request.data.minutes;
            seconds = request.data.seconds;
            repeat = request.data.repeat;
            paused = request.data.paused;
            soundOn = request.data.soundOn;
            start();
        }
    }
);

function myClock() {
  if (!paused) {
      if (hours <= 0 && minutes <= 0 && seconds <= -1 && created) {
        PopupCenter('/reminder/reminder.html', 'mywin', 315, 250);
        clearInterval(timer);
        created = false;
        chrome.runtime.sendMessage({
            msg: "sound",
            data: {
                soundOn: soundOn
            }
        });
      } else {
          chrome.runtime.sendMessage({
              msg: "updateTime",
              data: {
                  hours: hours,
                  minutes: minutes,
                  seconds: seconds
              }
          });
      }
      clockCalculateNextValues();
  }
}

function clockCalculateNextValues() {
    if (minutes <= 0 && hours >= 1 && seconds <= 0) {
        minutes = 60;
        hours--;
    }
    if (seconds <= 0 && minutes >= 1) {
        seconds = 60;
        minutes--;
    }
    seconds--;
}

function PopupCenter(pageURL, title,w,h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  return targetWin;
}
